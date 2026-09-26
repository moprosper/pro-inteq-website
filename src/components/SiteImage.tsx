import Image from "next/image";

interface SiteImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Rendered width hint for responsive image selection. */
  sizes?: string;
  /** Load early and at high priority (use only for above-the-fold images). */
  eager?: boolean;
  objectFit?: "cover" | "contain";
  overlay?: boolean;
  overlayClassName?: string;
  rounded?: boolean;
}

// Full class names so Tailwind can detect them at build time.
const objectFitClass = {
  cover: "object-cover",
  contain: "object-contain",
} as const;

export default function SiteImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  eager = false,
  objectFit = "cover",
  overlay = false,
  overlayClassName = "",
  rounded = true,
}: SiteImageProps) {
  return (
    <div className={`relative overflow-hidden ${rounded ? "rounded-xl" : ""} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={objectFitClass[objectFit]}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
      {overlay && <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />}
    </div>
  );
}
