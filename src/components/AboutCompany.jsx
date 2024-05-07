import aboutCompany from "/aboutCompany.jpg";
import Container from "./Container";
import { BsCarFrontFill } from "react-icons/bs";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";

const AboutCompany = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="max-w-[1500px] gap-12 flex justify-center">
          <div className="flex flex-1 justify-center my-10">
            <img
              src={aboutCompany}
              alt="Photo of sales representative and customer"
              className="w-[700px] h-[700px] object-cover rounded-md"
            />
          </div>
          {/* Text container */}
          <div className="flex-1 flex flex-col gap-7 justify-center ">
            <h3 className="font-bold text-xl">About Company</h3>
            <h2 className="font-bold text-4xl">
              You start the engine and your adventure begins
            </h2>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              pariatur! Labore ipsam suscipit iure commodi tempore. Autem,
              exercitationem. Nostrum, assumenda quisquam! Tenetur rem eaque
              magnam blanditiis accusamus earum commodi non.
            </p>
            {/* Icon container */}
            <div className="flex flex-col gap-2 lg:flex-row justify-between">
              {/* Icon 1 */}
              <div className="flex flex-col gap-1 items-center ">
                <BsCarFrontFill size={90} className="text-[#FA4226]" />
                <div className="flex flex-col lg:flex-row gap-3 items-center">
                  <p className="font-bold text-4xl">20</p>
                  <p className="text-slate-500">Car Types</p>
                </div>
              </div>
              {/* Icon 1 */}
              <div className="flex flex-col gap-1 items-center ">
                <FaBuildingCircleCheck size={90} className="text-[#FA4226]" />
                <div className="flex flex-col lg:flex-row gap-3 items-center">
                  <p className="font-bold text-4xl">85</p>
                  <p className="text-slate-500">Rental Outlets</p>
                </div>
              </div>
              {/* Icon 1 */}
              <div className="flex flex-col gap-1 items-center ">
                <GiAutoRepair size={90} className="text-[#FA4226]" />
                <div className="flex flex-col lg:flex-row gap-3 items-center">
                  <p className="font-bold text-4xl">75</p>
                  <p className="text-slate-500">Car Types</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutCompany;
