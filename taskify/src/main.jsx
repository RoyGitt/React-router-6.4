import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as addPostAction } from "./pages/NewPost.jsx";
import HomeLayout from "./layout/HomeLayout.jsx";
import Posts, { loader as postsLoader } from "./pages/Posts.jsx";
import Post, { loader as postLoader } from "./pages/Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/posts/new-post",
            element: <NewPost />,
            action: addPostAction,
          },
          {
            path: "/posts/:postId",
            element: <Post />,
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
