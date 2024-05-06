import { useState } from "react";
import bentley from "/fleet/bentley.jpg";
import bmw from "/fleet/bmw.jpg";
import corvette from "/fleet/corvette.jpg";
import kia from "/fleet/kia.jpg";
import lamborghini from "/fleet/lamborghini.jpg";
import subaru from "/fleet/subaru.jpg";
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
    <div className="flex justify-center">
      <div className="flex flex-col lg:max-w-[1500px] justify-center items-center w-full h-full mt-20">
        <div className=" w-full flex flex-col justify-between ">
          <h4 className="text-center text-2xl font-bold mb-2">
            Vehicle Models
          </h4>
          <h3 className="text-center text-4xl font-bold mb-2">
            Our rental fleet
          </h3>
          <h2 className="text-center text-lg text-slate-500">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip.
          </h2>
        </div>
        <div className="flex flex-col w-full h-full gap-3 mt-7 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-2">
            {carTypes.map((carType, index) => (
              <>
                <button
                  key={carType}
                  onClick={() => handleClick(index)}
                  className={`${
                    selectedButton === index
                      ? "bg-[#FA4226] text-white"
                      : "bg-slate-200"
                  } w-full lg:max-w-[300px] h-auto  p-2 font-bold hover:bg-[#FA4226] hover:text-white transition-colors duration-300`}
                >
                  {carType}
                </button>
              </>
            ))}
          </div>
          <div>
            {selectedCar.image && (
              <img
                className="max-h-[400px] rounded-md w-full lg:w-[650px] object-cover"
                src={selectedCar.image}
                alt={selectedCar.title}
              />
            )}
          </div>
          <div className="w-full lg:max-w-[300px] flex flex-col items-center">
            <div className="bg-[#FA4226] w-full px-3 py-2 text-white flex items-center gap-2 justify-center">
              <span className="font-bold text-3xl">${selectedCar.price}</span>
              <p>
                <span className="text-xl text-white">/</span> rent per day
              </p>
            </div>
            <div className="w-full grid grid-cols-1">
              <div className="grid grid-cols-2 border-2 text-center">
                <div className="border-r-2">Model</div>
                <div>{selectedCar.model}</div>
              </div>
              <div className="grid grid-cols-2 border-2 text-center">
                <div className="border-r-2">Year</div>
                <div>{selectedCar.year}</div>
              </div>
              <div className="grid grid-cols-2 border-2 text-center">
                <div className="border-r-2">Doors</div>
                <div>{selectedCar.doors}</div>
              </div>
              <div className="grid grid-cols-2 border-2 text-center">
                <div className="border-r-2">AC</div>
                <div>{selectedCar.ac}</div>
              </div>
              <div className="grid grid-cols-2 border-2 text-center">
                <div className="border-r-2">Transmission</div>
                <div>{selectedCar.transmission}</div>
              </div>
              <div className="grid grid-cols-2 border-2 text-center">
                <div className="border-r-2">Fuel</div>
                <div>{selectedCar.fuel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalFleet;
