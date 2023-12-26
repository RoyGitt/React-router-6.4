import { useLoaderData, useNavigate } from "react-router-dom";

const Post = () => {
  const postData = useLoaderData();

  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-full h-full absolute inset-0 bg-[rgba(0,0,0,0.2)]"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="absolute left-1/2 top-1/2 right-1/2  translate-x-[-50%] translate-y-[-50%] max-w-3xl w-full text-white p-8 rounded-md bg-slate-950">
        <h2 className="text-5xl font-semibold mb-8">{postData.title}</h2>
        <p className="text-xl">{postData.desc}</p>
      </div>
    </>
  );
};
export default Post;

export const loader = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${params.postId}`);
  const { post } = await res.json();
  return post;
};
