import Image from "next/image";
import { BlogPost } from "@/data";

interface BlogDetailHeroImageProps {
  post: BlogPost;
}

export function BlogDetailHeroImage({ post }: BlogDetailHeroImageProps) {
  return (
    <div className="relative h-[280px] sm:h-[420px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200/80">
      <Image
        src={post.image}
        alt={post.title}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 900px"
        className="object-cover"
      />
    </div>
  );
}
