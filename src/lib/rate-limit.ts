/**
 * Minimal fixed-window rate limiter kept in server memory.
 *
 * It stops a single client from flooding the quotation form without any extra
 * infrastructure. Limits apply per server instance, so on hosts that run many
 * instances it is a first line of defence only; a shared store (for example
 * Redis) can replace this module later without changing its callers.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_KEYS = 5000;

const hits = new Map<string, { count: number; windowStart: number }>();

export function isRateLimited(key: string, now = Date.now()): boolean {
  const entry = hits.get(key);
  if (!entry || now - entry.windowStart >= WINDOW_MS) {
    if (hits.size >= MAX_TRACKED_KEYS) {
      // Drop expired entries so memory stays bounded.
      for (const [storedKey, value] of hits) {
        if (now - value.windowStart >= WINDOW_MS) hits.delete(storedKey);
      }
      if (hits.size >= MAX_TRACKED_KEYS) hits.clear();
    }
    hits.set(key, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}
