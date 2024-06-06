import { Hero2, RentingProcess, Contact } from "../components";
import { AboutCompany } from "../pageComponents/aboutPage";
const AboutPage = () => {
  return (
    <div className="flex flex-col gap-[150px]">
      <Hero2 title="About" />
      <AboutCompany />
      <RentingProcess />
      <Contact />
    </div>
  );
};

export default AboutPage;
