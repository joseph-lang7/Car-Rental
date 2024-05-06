import BookCar from "../components/BookCar";
import Hero from "../components/Hero";
import RentalFleet from "../components/RentalFleet";
import RentingProcess from "../components/RentingProcess";
import SaveBigBanner from "../components/SaveBigBanner";

const HomePage = () => {
  return (
    <>
      <Hero />
      <BookCar />
      <RentingProcess />
      <RentalFleet />
      <SaveBigBanner />
    </>
  );
};

export default HomePage;
