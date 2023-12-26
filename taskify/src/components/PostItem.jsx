import { useNavigate } from "react-router-dom";

const PostItem = ({ title, desc, id }) => {
  const navigate = useNavigate();

  const openPostDetailsHandler = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <li
      className="bg-slate-500 text-white flex flex-col lg:max-w-[20rem] w-full p-4 rounded-md h-[15rem]"
      onClick={openPostDetailsHandler}
    >
      <h3 className="font-semibold text-4xl mb-3">{title}</h3>
      <p>{desc}</p>
    </li>
  );
};
export default PostItem;
