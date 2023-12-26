import fs from "fs/promises";

export const getStoredPost = async () => {
  const rawFile = await fs.readFile("posts.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFile);
  const storedPosts = data.posts ?? [];
  return storedPosts;
};

export const storePosts = async (posts) => {
  return await fs.writeFile(
    "posts.json",
    JSON.stringify({ posts: posts || [] })
  );
};
