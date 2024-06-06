import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="relative max-w-screen bottom-0 left-0 h-auto p-16 bg-black mt-[150px] text-white flex justify-center">
      <div className="max-w-[1500px]  grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="text-2xl text-center md:text-start">
              <span className="font-bold">CAR </span>Rental
            </h2>
          </div>
          <div className=" w-full text-center md:text-start">
            We offer a wide range of vehicles for all your driving needs.
          </div>
          <div className="flex items-center flex-col md:items-start ">
            <div className="flex gap-2 items-center hover:translate-x-2 hover:text-[#FA4226] cursor-pointer transition-all duration-300">
              <FaPhoneAlt />
              <p className="font-bold">(123)-456-789</p>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 hover:text-[#FA4226] cursor-pointer transition-all duration-300">
              <MdOutlineEmail />
              <p className="font-bold">info@carrental.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-bold">Company</h2>
          <p className="hover:translate-x-2 hover:text-[#FA4226] cursor-pointer transition-all duration-300">
            California
          </p>
          <p className="hover:translate-x-2 hover:text-[#FA4226] cursor-pointer transition-all duration-300">
            Careers
          </p>
          <p className="hover:translate-x-2 hover:text-[#FA4226] cursor-pointer transition-all duration-300">
            Mobile
          </p>
          <p className="hover:translate-x-2 hover:text-[#FA4226] cursor-pointer transition-all duration-300">
            Blog
          </p>
          <p className="hover:translate-x-2 hover:text-[#FA4226] cursor-pointer transition-all duration-300">
            How We Work
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-bold">Working Hours</h2>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 10:00PM</p>
          <p>Sun: Closed</p>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-2xl font-bold ">Subscribe</h2>
            <p>Subscribe to our newsletter to get the latest news and deals.</p>
            <div className="flex flex-col gap-2">
              <input
                className="p-4 rounded-md text-black"
                type="email"
                placeholder="Enter Email Address"
              />
              <button className="w-full text-sm text-white hover:shadow-lg hover:bg-[#de462f] transition-all duration-300 font-bold p-3 bg-[#FA4226] rounded-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
