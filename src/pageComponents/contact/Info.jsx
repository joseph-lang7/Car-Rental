import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
const Info = () => {
  return (
    <div className="flex flex-col gap-5 flex-1 text-center mt-10 lg:flex-1">
      <h2 className="font-bold text-4xl">Need additional information?</h2>
      <p className="text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cpq
        facere necessitatibus illo aut magnam numquam quia officia at totam
        harum laudantium aspernatur optio.
      </p>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2 items-center hover:text-[#FA4226] cursor-pointer transition-all duration-300 hover:translate-x-2">
          <FaPhoneAlt />
          <p className="font-bold">(123)-456-789</p>
        </div>
        <div className="flex items-center gap-2 hover:text-[#FA4226] cursor-pointer transition-all duration-300 hover:translate-x-2">
          <MdOutlineEmail />
          <p className="font-bold">info@carrental.com</p>
        </div>
        <div className="flex items-center gap-2 hover:text-[#FA4226] cursor-pointer transition-all duration-300 hover:translate-x-2">
          <TbLocation />
          <p className="font-bold">San Francisco, CA</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
