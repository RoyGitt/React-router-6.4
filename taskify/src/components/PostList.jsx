import { Outlet, useLoaderData } from "react-router-dom";
import { FaRegSadTear } from "react-icons/fa";
import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";

const PostList = () => {
  const posts = useLoaderData();

  return (
    <>
      <Outlet />
      {posts?.length === 0 && (
        <h1 className="text-center text-5xl text-white text-semibold flex gap-4 items-center justify-center h-screen">
          No Posts to Show <FaRegSadTear />
        </h1>
      )}
      {posts?.length > 0 && (
        <ul className="max-container lg:grid lg:grid-cols-4  place-items-center flex flex-col  pb-[7rem] pt-[3rem] gap-6">
          {posts.map((post, index) => (
            <PostItem
              title={post.title}
              key={`${post.title}_${index}`}
              id={post.id}
              desc={post.desc}
            />
          ))}
        </ul>
      )}
    </>
  );
};
export default PostList;
