import AboutCompany from "../components/AboutCompany";
import Hero2 from "../components/Hero2";
import RentingProcess from "../components/RentingProcess";
const AboutPage = () => {
  return (
    <div className="flex flex-col gap-[150px]">
      <Hero2 title="About" />
      <AboutCompany />
      <RentingProcess />
    </div>
  );
};

export default AboutPage;
