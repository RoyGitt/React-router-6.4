import { Form, redirect } from "react-router-dom";
import Button from "../components/Button";
import { IoIosCloseCircle } from "react-icons/io";
import { MdLibraryAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  const closeFormHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div className="absolute inset-0 w-full h-full backdrop-blur-lg  " />
      <Form
        method="post"
        className="flex flex-col gap-8 bg-slate-950 text-white max-w-[22rem] w-full px-4 py-8 rounded-md absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10 backdrop-blur-[5px]"
      >
        <IoIosCloseCircle
          className="absolute right-[-20px] top-[-20px] text-5xl cursor-pointer"
          onClick={closeFormHandler}
        />
        <div className="flex flex-col gap-3 text-3xl">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            maxLength="30"
            type="text"
            required
            name="title"
            className="text-lg bg-slate-800 rounded-md p-1"
          ></input>
        </div>
        <div className="flex flex-col gap-3 text-3xl">
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            required
            rows="5"
            name="desc"
            maxLength="80"
            className="text-lg bg-slate-800 rounded-md p-1"
          ></textarea>
        </div>
        <Button>
          <MdLibraryAdd />
          Post
        </Button>
      </Form>
    </>
  );
};
export default NewPost;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  });

  return redirect("/");
};
