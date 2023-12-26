import { Outlet, redirect } from "react-router-dom";
import PostList from "../components/PostList";

const Posts = () => {
  return (
    <>
      <Outlet />
      <PostList />
    </>
  );
};
export default Posts;

export const loader = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { posts } = await res.json();
  return posts;
};
