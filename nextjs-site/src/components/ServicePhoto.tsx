import Image from "next/image";

type ServicePhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function ServicePhoto({ src, alt, priority, className }: ServicePhotoProps) {
  return (
    <figure className={`service-photo-wrap ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="service-photo"
        sizes="(max-width: 992px) 100vw, 960px"
        priority={priority}
      />
    </figure>
  );
}
