import Image from "next/image";

type ServicePhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Use for portrait / headshot (e.g. About page). */
  variant?: "landscape" | "portrait";
};

export default function ServicePhoto({
  src,
  alt,
  priority,
  className,
  variant = "landscape",
}: ServicePhotoProps) {
  const wrapClass =
    variant === "portrait"
      ? `service-photo-wrap service-photo-wrap--portrait ${className ?? ""}`
      : `service-photo-wrap ${className ?? ""}`;

  return (
    <figure className={wrapClass.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        className="service-photo"
        sizes={
          variant === "portrait"
            ? "(max-width: 768px) 100vw, 400px"
            : "(max-width: 992px) 100vw, 960px"
        }
        priority={priority}
      />
    </figure>
  );
}
