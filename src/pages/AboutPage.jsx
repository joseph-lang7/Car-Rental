import AboutCompany from "../pageComponents/about/AboutCompany";
import Hero2 from "../components/Hero2";
import RentingProcess from "../components/RentingProcess";
import Contact from "../components/Contact";
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
