import {
  Hero,
  BookCar,
  RentalFleet,
  SaveBigBanner,
  WhyUs,
  OurApp,
} from "../pageComponents/homePage";
import { RentingProcess, Reviews } from "../components";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-[150px]">
      <Hero />
      <BookCar />
      <RentingProcess />
      <RentalFleet />
      <SaveBigBanner />
      <WhyUs />
      <Reviews />
      <OurApp />
    </div>
  );
};

export default HomePage;
