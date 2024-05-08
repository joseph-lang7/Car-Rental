import AboutCompany from "../components/AboutCompany";
import Hero2 from "../components/Hero2";
import RentingProcess from "../components/RentingProcess";
import Contact from "../components/Contact";
const AboutPage = () => {
  return (
    <div>
      <Hero2 title="About" />
      <AboutCompany />
      <RentingProcess />
      <Contact />
    </div>
  );
};

export default AboutPage;
