import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/data";
import { BlogDetailView } from "@/components/features/blog-details";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | IndianListingBucket",
    };
  }

  return {
    title: `${post.title} | IndianListingBucket Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, post.categorySlug, 3);

  return <BlogDetailView post={post} relatedPosts={relatedPosts} />;
}
