import { useState } from "react";
import bentley from "/fleet/bentley.jpg";
import bmw from "/fleet/bmw.jpg";
import corvette from "/fleet/corvette.jpg";
import kia from "/fleet/kia.jpg";
import lamborghini from "/fleet/lamborghini.jpg";
import subaru from "/fleet/subaru.jpg";
import { Container } from "../../../components";
import CarDetails from "./components/CarDetails";
const RentalFleet = () => {
  const carTypes = [
    "Subaru WRX",
    "Bentley Continental",
    "BMW M4",
    "Corvette Stingray",
    "Kia Stinger",
    "Lamborghini Aventador",
  ];

  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedCar, setSelectedCar] = useState({
    title: "Subaru WRX",
    image: subaru,
    price: 35,
    model: "model",
    year: "year",
    doors: 4,
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gas",
  });
  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
    switch (buttonId) {
      case 0:
        setSelectedCar({
          title: "Subaru WRX",
          image: subaru,
          price: 35,
          model: "WRX",
          year: "2022",
          doors: 4,
          ac: "Yes",
          transmission: "Automatic",
          fuel: "Gas",
        });
        break;
      case 1:
        setSelectedCar({
          title: "Bentley Continental",
          image: bentley,
          price: 45,
          model: "Continental GT",
          year: "2021",
          doors: 2,
          ac: "Yes",
          transmission: "Automatic",
          fuel: "Gas",
        });
        break;
      case 2:
        setSelectedCar({
          title: "BMW M4",
          image: bmw,
          price: 40,
          model: "M4",
          year: "2020",
          doors: 2,
          ac: "Yes",
          transmission: "Automatic",
          fuel: "Gas",
        });
        break;
      case 3:
        setSelectedCar({
          title: "Corvette Stingray",
          image: corvette,
          price: 40,
          model: "Stingray",
          year: "2023",
          doors: 2,
          ac: "Yes",
          transmission: "Automatic",
          fuel: "Gas",
        });
        break;
      case 4:
        setSelectedCar({
          title: "Kia Stinger",
          image: kia,
          price: 35,
          model: "Stinger",
          year: "2022",
          doors: 4,
          ac: "Yes",
          transmission: "Automatic",
          fuel: "Gas",
        });
        break;
      case 5:
        setSelectedCar({
          title: "Lamborghini Aventador",
          image: lamborghini,
          price: 45,
          model: "Aventador",
          year: "2024",
          doors: 2,
          ac: "Yes",
          transmission: "Automatic",
          fuel: "Gas",
        });
        break;
    }
  };
  return (
    <Container>
      <div className="flex justify-center">
        <div className="flex flex-col lg:max-w-[1500px] justify-center items-center w-full h-full">
          <div className=" w-full flex flex-col justify-between ">
            <h4 className="text-center text-2xl font-bold mb-2">
              Vehicle Models
            </h4>
            <h3 className="text-center text-4xl font-bold mb-2">
              Our rental fleet
            </h3>
            <h2 className="text-center text-lg text-slate-500">
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip.
            </h2>
          </div>
          <div className="flex flex-col items-center h-full w-full  gap-3 mt-7 xl:flex-row justify-between">
            <div className="flex flex-col items-center gap-2 w-full xl:max-w-[400px]">
              {carTypes.map((carType, index) => (
                <button
                  key={carType}
                  onClick={() => handleClick(index)}
                  className={`${
                    selectedButton === index
                      ? "bg-[#FA4226] text-white"
                      : "bg-slate-200"
                  } w-full h-auto p-2 font-bold hover:bg-[#FA4226] hover:text-white transition-colors duration-300`}
                >
                  {carType}
                </button>
              ))}
            </div>
            <div className=" flex justify-center lg:max-w-[800px]">
              {selectedCar.image && (
                <img
                  className="h-[400px] rounded-md w-full lg:w-[650px] object-cover"
                  src={selectedCar.image}
                  alt={selectedCar.title}
                />
              )}
            </div>
            <div className="w-full xl:max-w-[300px] flex flex-col items-center">
              <CarDetails
                price={selectedCar.price}
                model={selectedCar.model}
                year={selectedCar.year}
                doors={selectedCar.doors}
                ac={selectedCar.ac}
                transmission={selectedCar.transmission}
                fuel={selectedCar.fuel}
              />
              <button className="w-full mt-3 text-sm text-white hover:shadow-lg hover:bg-[#de462f] transition-all duration-300 font-bold p-3 bg-[#FA4226] rounded-sm">
                RESERVE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RentalFleet;
