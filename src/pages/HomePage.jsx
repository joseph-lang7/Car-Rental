import BookCar from "../components/BookCar";
import Hero from "../components/Hero";
import RentalFleet from "../components/RentalFleet";
import RentingProcess from "../components/RentingProcess";
import SaveBigBanner from "../components/SaveBigBanner";
import WhyUs from "../components/WhyUs";
import Reviews from "../components/Reviews";
import OurApp from "../components/OurApp";
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
