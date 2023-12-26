import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ onAddPost }) => {
  return (
    <header className="max-container pb-0 w-full">
      <div className=" flex justify-between py-10">
        <h1 className="text-white text-4xl flex items-center gap-4">
          <MdMessage />
          React Poster
        </h1>
        <Button onClick={onAddPost}>
          <Link to="/posts/new-post">
            <span className="flex items-center gap-2">
              <MdAddToPhotos />
              New Post
            </span>
          </Link>
        </Button>
      </div>
      <hr />
    </header>
  );
};
export default Header;
