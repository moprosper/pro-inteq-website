import Image from "next/image";
import Link from "next/link";
import { LOGO_PATH } from "@/lib/assets";
import { COMPANY } from "@/lib/company";

interface LogoProps {
  variant?: "default" | "hero" | "footer";
  showText?: boolean;
  className?: string;
}

const sizeClasses = {
  default: "h-10 w-auto",
  hero: "h-36 w-auto sm:h-44",
  footer: "h-11 w-auto",
};

export default function Logo({
  variant = "default",
  showText = false,
  className = "",
}: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src={LOGO_PATH}
        alt={`${COMPANY.shortName} logo`}
        width={1024}
        height={1024}
        className={`${sizeClasses[variant]} object-contain`}
        priority={variant === "hero"}
        unoptimized
      />
      {showText && (
        <span className="sr-only">{COMPANY.name}</span>
      )}
    </Link>
  );
}
