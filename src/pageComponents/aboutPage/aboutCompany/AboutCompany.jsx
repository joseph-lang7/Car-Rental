import aboutCompany from "/about-company.jpg";
import { Container } from "../../../components";
import { BsCarFrontFill } from "react-icons/bs";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import TextSection from "./components/TextSection";
import Icon from "./components/Icon";

const AboutCompany = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="lg:max-w-[1500px] max-w-[800px]  gap-12 flex flex-col lg:flex-row lg:justify-center">
          <div className="flex flex-1 justify-center">
            <img
              src={aboutCompany}
              alt="Photo of sales representative and customer"
              className="w-[700px] h-[700px] object-cover rounded-md"
            />
          </div>
          <div className="flex-1 flex flex-col gap-7 text-center lg:text-start lg:justify-center">
            <TextSection />
            <div className="flex flex-row gap-2 md:flex-row justify-between">
              <Icon icon={<BsCarFrontFill />} amount={20} content="Car Types" />
              <Icon
                icon={<FaBuildingCircleCheck />}
                amount={85}
                content="Rental Outlets"
              />
              <Icon icon={<GiAutoRepair />} amount={75} content="Car Types" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutCompany;
