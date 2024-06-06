import { LuMailOpen } from "react-icons/lu";

const Button = () => {
  return (
    <button className="h-[65px] max-w-full text-white hover:shadow-lg hover:bg-[#de462f] transition-all flex gap-2 justify-center items-center duration-300 font-bold p-3 bg-[#FA4226] rounded-sm">
      <LuMailOpen />
      Send Message
    </button>
  );
};

export default Button;
