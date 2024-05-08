import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="max-w-screen h-auto p-10 bg-[#2D2D2D] flex justify-center my-[120px]">
      <div className="flex flex-col gap-2 md:flex-row max-w-[1500px]">
        <h2 className="flex-1 text-white text-4xl text-center font-bold">
          Book a car by getting in touch with us
        </h2>
        <h3 className="flex-1 text-[#FA4226] flex items-center gap-3 font-bold text-3xl justify-center">
          <FaPhoneAlt size={30} />
          (123) 456-7829
        </h3>
      </div>
    </div>
  );
};

export default Contact;
