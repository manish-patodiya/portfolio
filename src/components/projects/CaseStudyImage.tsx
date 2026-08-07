import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

/**
 * Full-width case-study visual at the image’s natural aspect ratio (no crop).
 */
export function CaseStudyImage({ src, alt, priority = false }: Props) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-[0_0_40px_rgba(34,211,238,0.06)]">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        priority={priority}
        className="h-auto w-full"
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </figure>
  );
}
