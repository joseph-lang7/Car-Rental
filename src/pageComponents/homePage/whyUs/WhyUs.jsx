import { Container } from "../../../components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";

const WhyUs = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="max-w-[1500px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
            {/* Section1 */}
            <div className=" flex flex-col gap-3 mt-12 md:justify-center">
              <h3 className="font-bold text-xl">Why Choose Us?</h3>
              <div>
                <h2 className="font-bold text-4xl max-w-[300px]">
                  Best valued deals you will ever find
                </h2>
              </div>
              <p className="w-full">
                Explore unparalleled savings with our exceptional offers. Our
                commitment lies in delivering optimal value for your budget,
                ensuring you access premium services and vehicles affordably.
                Crafted to enhance your renting journey, our deals guarantee an
                unmatched experience. Don&apos;t miss the opportunity to
                maximize your savings today.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className=" mt-3 text-sm text-white hover:shadow-lg hover:bg-[#de462f] transition-all duration-300 font-bold p-3 bg-[#FA4226] rounded-sm flex items-center">
                  Find Details
                  <MdKeyboardArrowRight size={30} />
                </button>
              </div>
            </div>
            {/* Section2 */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 justify-center items-center mt-10 md:flex-row">
                <div>
                  <RiCustomerService2Fill
                    className="text-[#FA4226]"
                    size={90}
                  />
                </div>
                <div className="flex flex-col items-center text-center gap-2 md:max-w-[500px]">
                  <h3 className="text-2xl font-bold">Exceptional Service</h3>
                  <p className="text-slate-500">
                    Our commitment to excellence doesn&apos;t end when you drive
                    off the lot. From booking your rental to returning your
                    vehicle, our dedicated team is here to ensure your
                    experience is nothing short of exceptional.{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center mt-10 md:flex-row">
                <div>
                  <FaMagnifyingGlassDollar
                    className="text-[#FA4226]"
                    size={90}
                  />
                </div>
                <div className="flex flex-col items-center text-center gap-2 md:max-w-[500px]">
                  <h3 className="text-2xl font-bold">No Hidden Fees</h3>
                  <p className="text-slate-500">
                    Our commitment to excellence doesn&apos;t end when you drive
                    off the lot. From booking your rental to returning your
                    vehicle, our dedicated team is here to ensure your
                    experience is nothing short of exceptional.{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-10 gap-2 md:flex-row">
                <div>
                  <FaHandHoldingDollar className="text-[#FA4226]" size={90} />
                </div>
                <div className="flex flex-col items-center text-center gap-2 md:max-w-[500px]">
                  <h3 className="text-2xl font-bold">All Inclusive Pricing</h3>
                  <p className="text-slate-500">
                    Our commitment to excellence doesn&apos;t end when you drive
                    off the lot. From booking your rental to returning your
                    vehicle, our dedicated team is here to ensure your
                    experience is nothing short of exceptional.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyUs;
