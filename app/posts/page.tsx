import { getPosts } from "@/_utils/post";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <>
      <ul>
        {posts.map(({ title, subtitle, date }) => (
          <Link href={{ pathname: `/posts/${title}` }}>{title}</Link>
        ))}
      </ul>
    </>
  );
}
