import { useState } from "react";
import { FaCarSide } from "react-icons/fa6";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/" },
    { label: "Vehicle Models", href: "/" },
    { label: "Testimonials", href: "/" },
    { label: "Our Team", href: "/" },
    { label: "Contact", href: "/" },
  ];
  return (
    <>
      <nav className="flex justify-between w-screen items-center p-5">
        <div className="flex gap-3 items-center">
          <FaCarSide className="text-[#FA4226]" size={70} />
          <div className="flex flex-col">
            <h2 className="font-bold text-xl mb-[-10px]">CAR</h2>
            <p className="text-lg">Rental</p>
          </div>
        </div>
        {/* Nav Items */}
        <ul className=" gap-4 font-semibold hidden lg:flex">
          {navItems.map((navItem) => (
            <li
              className="hover:text-[#FA4226] cursor-pointer transition-colors duration-300"
              key={navItem.label}
            >
              {navItem.label}
            </li>
          ))}
        </ul>
        {/* Auth Items */}
        <div className=" gap-3 hidden lg:flex">
          <button className="hover:text-[#FA4226] transition-colors duration-300">
            Sign In
          </button>
          <button className="bg-[#FA4226] text-white px-8 py-3 rounded-sm hover:shadow-lg hover:bg-[#de462f] transition-all duration-300 font-bold">
            Register
          </button>
        </div>
        {/* Hamburger Menu */}
        <div className="lg:hidden z-20">
          <Hamburger
            toggled={isOpen}
            onToggle={() => [setOpen(!isOpen), setMobileNav(!mobileNav)]}
          />
        </div>
      </nav>
      {/* Mobile Nav */}
      <ul
        className={`${
          mobileNav ? "left-0 " : "left-[-200%]"
        } h-screen w-screen transition-all duration-700 absolute bg-slate-100 lg:hidden text-black flex flex-col justify-center items-center gap-10 text-4xl top-0`}
      >
        {navItems.map((navItem) => (
          <li className=" cursor-pointer" key={navItem.label}>
            {navItem.label}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
