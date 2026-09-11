import Image from "next/image";

interface SiteImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "scale-down" | "stretch";
  overlay?: boolean;
  overlayClassName?: string;
  rounded?: boolean;
  shadow?: boolean;
}

export default function SiteImage({
  src,
  alt,
  className = "",
  priority = false,
  objectFit = "cover",
  overlay = false,
  overlayClassName = "",
  rounded = true,
  shadow = false,
}: SiteImageProps) {
  return (
    <div
      className={`relative overflow-hidden ${rounded ? "rounded-xl" : ""} ${
        shadow ? "shadow-lg" : ""
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-${objectFit}`}
        priority={priority}
      />
      {overlay && (
        <div
          className={`absolute inset-0 ${overlayClassName}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
}