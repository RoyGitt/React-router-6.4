import { getStoredPost, storePosts } from "../data/posts.js";

export const getPosts = async (req, res) => {
  const storedPosts = await getStoredPost();
  res.status(200).json({ posts: storedPosts });
};

export const setPosts = async (req, res) => {
  const storedPosts = await getStoredPost();
  const postData = req.body;
  const newPost = {
    ...postData,
    id: Math.random().toString(),
  };
  await storePosts([newPost, ...storedPosts]);
  res.json({ message: "Stored Successfully", post: newPost });
};

export const getPost = async (req, res) => {
  const storedPosts = await getStoredPost();
  const postId = req.params.id;
  console.log(postId);
  const post = storedPosts.find((post) => post.id === postId);
  res.status(200).json({ post });
};
