import Image from "next/image";
import Link from "next/link";
import { LOGO } from "@/lib/assets";
import { COMPANY } from "@/lib/company";

interface LogoProps {
  variant?: "header" | "footer";
}

export default function Logo({ variant = "header" }: LogoProps) {
  // The logo artwork has dark lettering, so on the dark footer it sits on a
  // white plate to stay legible.
  const wrapperClass =
    variant === "footer" ? "inline-flex rounded-lg bg-white px-3 py-2" : "inline-flex";

  return (
    <Link href="/" aria-label={`${COMPANY.shortName} home`} className={wrapperClass}>
      <Image
        src={LOGO.src}
        alt={`${COMPANY.shortName} Engineering and Consulting`}
        width={LOGO.width}
        height={LOGO.height}
        sizes="200px"
        className="h-10 w-auto"
        loading={variant === "header" ? "eager" : "lazy"}
      />
    </Link>
  );
}
