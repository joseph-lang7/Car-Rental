import Container from "../components/Container";
import Hero2 from "../components/Hero2";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { LuMailOpen } from "react-icons/lu";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <>
      <Hero2 title="Contact" />
      <div className="flex flex-col gap-[150px]">
        <Container>
          <div className="flex justify-center mt-20">
            <div className="flex flex-col gap-8 lg:flex-row max-w-[1500px]">
              {/* Text Section */}
              <div className="flex flex-col gap-5 flex-1 text-center mt-10 lg:flex-1">
                <h2 className="font-bold text-4xl">
                  Need additional information?
                </h2>
                <p className="text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  cpq facere necessitatibus illo aut magnam numquam quia officia
                  at totam harum laudantium aspernatur optio.
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
              {/* Form Section */}
              <form className="flex flex-col gap-5 lg:flex-1">
                <div className="flex flex-col gap-1">
                  <label htmlFor="fullName" className="font-bold text-center">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="gap-2 bg-slate-200 p-3 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-bold text-center">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="gap-2 bg-slate-200 p-3 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="font-bold text-center">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="gap-2 bg-slate-200 p-3 rounded-md h-[300px] resize-none"
                  />
                </div>
                <button className="h-[65px] max-w-full text-white hover:shadow-lg hover:bg-[#de462f] transition-all flex gap-2 justify-center items-center duration-300 font-bold p-3 bg-[#FA4226] rounded-sm">
                  <LuMailOpen />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
