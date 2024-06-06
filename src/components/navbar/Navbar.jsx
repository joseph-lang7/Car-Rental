import { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa6";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Vehicle Models", href: "/models" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Our Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (mobileNav) {
      setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 670);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [mobileNav]);

  return (
    <>
      <nav className="flex absolute justify-between w-full items-center p-5 bg-transparent">
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
              <Link to={navItem.href}>{navItem.label}</Link>
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
        <div className="lg:hidden">
          <Hamburger
            toggled={isOpen}
            onToggle={() => [setOpen(!isOpen), setMobileNav(!mobileNav)]}
          />
        </div>
      </nav>
      {/* Mobile Nav */}
      <ul
        className={`${
          mobileNav ? "translate-x-0 scrollbar-hide" : "translate-x-[-200vw]"
        }  w-full fixed h-screen bg-slate-100 transition-all duration-700 lg:hidden text-black flex flex-col justify-center items-center gap-10 text-4xl `}
      >
        {/* Hamburger Menu */}
        <div className="lg:hidden absolute top-7 right-5">
          <Hamburger
            toggled={isOpen}
            onToggle={() => [setOpen(!isOpen), setMobileNav(!mobileNav)]}
          />
        </div>
        {navItems.map((navItem) => (
          <li className=" cursor-pointer" key={navItem.label}>
            <Link
              onClick={() => [setMobileNav(!mobileNav), setOpen(!isOpen)]}
              to={navItem.href}
            >
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
