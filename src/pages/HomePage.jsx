import BookCar from "../components/BookCar";
import Hero from "../components/Hero";
import RentalFleet from "../components/RentalFleet";
import RentingProcess from "../components/RentingProcess";
import SaveBigBanner from "../components/SaveBigBanner";
import WhyUs from "../components/WhyUs";
const HomePage = () => {
  return (
    <>
      <Hero />
      <BookCar />
      <RentingProcess />
      <RentalFleet />
      <SaveBigBanner />
      <WhyUs />
    </>
  );
};

export default HomePage;
