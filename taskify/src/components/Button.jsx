const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-200 text-black  text-lg px-6 py-1 rounded-md font-semibold cursor-pointer flex items-center gap-2 self-center"
    >
      {children}
    </button>
  );
};
export default Button;
