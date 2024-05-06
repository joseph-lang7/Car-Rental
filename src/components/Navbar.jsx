import { FaCarSide } from "react-icons/fa6";
const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/" },
    { label: "Vehicle Models", href: "/" },
    { label: "Testimonials", href: "/" },
    { label: "Our Team", href: "/" },
    { label: "Contact", href: "/" },
  ];
  return (
    <nav className="flex justify-between items-center p-5">
      <div className="flex gap-3 items-center">
        <FaCarSide className="text-[#FA4226]" size={70} />
        <div className="flex flex-col">
          <h2 className="font-bold text-xl mb-[-10px]">CAR</h2>
          <p className="text-lg">Rental</p>
        </div>
      </div>
      <div>
        {/* Nav Items */}
        <ul className="flex gap-4 font-semibold">
          {navItems.map((navItem) => (
            <li
              className="hover:text-[#FA4226] cursor-pointer transition-colors duration-300"
              key={navItem.label}
            >
              {navItem.label}
            </li>
          ))}
        </ul>
      </div>
      {/* Auth Items */}
      <div className="flex gap-3">
        <button className="hover:text-[#FA4226] transition-colors duration-300">
          Sign In
        </button>
        <button className="bg-[#FA4226] text-white px-8 py-3 rounded-sm hover:shadow-lg hover:bg-[#de462f] transition-all duration-300 font-bold">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
