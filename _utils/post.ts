import { Post } from "@/_types";
import fs from "fs/promises";
import matter from "gray-matter";
import { cache } from "react";

export const getPosts = cache(async (): Promise<Post[]> => {
  const postFiles = await fs.readdir("_posts");

  const posts = await Promise.all(
    postFiles.map(async (file): Promise<Post> => {
      const filePath = `_posts/${file}`;
      const postContent = await fs.readFile(filePath, "utf8");

      const { data, content } = matter(postContent);

      return {
        ...(data as Omit<Post, "content">),
        content,
      };
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
});
