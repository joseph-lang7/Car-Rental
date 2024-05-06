import { FaRegCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import heroImage from "/hero-img.jpg";
import Container from "./Container";
const Hero = () => {
  return (
    <Container>
      <div className=" flex justify-around h-[800px] w-full items-center ">
        {/* Hero Text */}
        <div className="max-w-[1500px] flex gap-3 justify-center">
          <div className="flex flex-col gap-5 mt-10 justify-center">
            <h2 className="font-bold text-xl">Plan your trip now</h2>
            <h1 className="text-6xl font-bold max-w-[600px]">
              Save <span className="text-[#FA4226]">big</span> with our car
              rental
            </h1>
            <p className="text-slate-500 max-w-[600px]">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="flex gap-2">
              <button className="flex gap-2 items-center bg-[#FA4226] text-white px-5 py-3 rounded-sm hover:shadow-lg hover:bg-[#de462f] transition-all duration-300 font-bold">
                Book Ride
                <FaRegCheckCircle className="text-white" size={20} />
              </button>
              <button className="flex gap-2 items-center bg-black text-white px-5 rounded-sm hover:shadow-lg hover:bg-white hover:text-black transition-colors border-2 border-black duration-300  font-bold ">
                Learn More
                <MdKeyboardArrowRight size={30} />
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className=" hidden xl:flex max-h-full w-[900px]">
            <img
              className="rounded-sm object-cover"
              src={heroImage}
              alt="photo of subaru"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
