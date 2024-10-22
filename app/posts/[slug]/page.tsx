import { getPost, getPosts } from "@/app/_utils/post";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post?.title,
    description: post?.subtitle,
    openGraph: {
      title: post?.title,
      description: post?.subtitle,
      siteName: "Chiho.zip",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function Slug({
  params,
}: {
  params: { [key: string]: string };
}) {
  const { slug } = params;

  const post = await getPost(slug);

  if (!post) return null;

  return <MDXRemote source={post.content} />;
}
