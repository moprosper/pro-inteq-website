import Image from "next/image";
import Link from "next/link";
import { LOGO_PATH } from "@/lib/assets";
import { COMPANY } from "@/lib/company";

interface LogoProps {
  variant?: "default" | "hero" | "footer";
  showText?: boolean;
  className?: string;
}

const sizes = {
  default: { width: 160, height: 48 },
  hero: { width: 280, height: 84 },
  footer: { width: 180, height: 54 },
};

export default function Logo({
  variant = "default",
  showText = false,
  className = "",
}: LogoProps) {
  const { width, height } = sizes[variant];

  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src={LOGO_PATH}
        alt={`${COMPANY.shortName} Engineering and Consulting logo`}
        width={width}
        height={height}
        className="h-auto w-auto object-contain"
        priority={variant === "hero"}
      />
      {showText && (
        <span className="sr-only">{COMPANY.name}</span>
      )}
    </Link>
  );
}
