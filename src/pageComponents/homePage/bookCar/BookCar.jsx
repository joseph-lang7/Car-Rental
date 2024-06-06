import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiCarSimpleFill } from "react-icons/pi";
import { Container } from "../../../components";
import bentley from "/fleet/bentley.jpg";
import bmw from "/fleet/bmw.jpg";
import corvette from "/fleet/corvette.jpg";
import kia from "/fleet/kia.jpg";
import lamborghini from "/fleet/lamborghini.jpg";
import subaru from "/fleet/subaru.jpg";
import Dropdown from "./components/inputs/Dropdown";
import Date from "./components/inputs/Date";
const BookCar = () => {
  const [formData, setFormData] = useState({
    carType: "",
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    dropOffDate: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [, setSearch] = useState(false);
  const carTypes = [
    "Subaru WRX",
    "Bentley Continental",
    "BMW M4",
    "Corvette Stingray",
    "Kia Stinger",
    "Lamborghini Aventador",
  ];
  const locations = [
    "Los Angeles",
    "San Francisco",
    "San Diego",
    "Sacramento",
    "Santa Rosa",
  ];

  const [, setSelectedCar] = useState("");

  const handleChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [input]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const field in formData) {
      if (formData[field] === "") {
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, "4000");
        return;
      }
    }
    setSearch(true);
    if (formData.carType === "Subaru WRX") setSelectedCar(subaru);
    if (formData.carType === "Bentley Continental") setSelectedCar(bentley);
    if (formData.carType === "BMW M4") setSelectedCar(bmw);
    if (formData.carType === "Corvette Stingray") setSelectedCar(corvette);
    if (formData.carType === "Kia Stinger") setSelectedCar(kia);
    if (formData.carType === "Lamborghini Aventador")
      setSelectedCar(lamborghini);
    setFormData({
      carType: "",
      pickUpLocation: "",
      dropOffLocation: "",
      pickUpDate: "",
      dropOffDate: "",
    });
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, "4000");
  };
  return (
    <>
      <Container>
        <div className="flex flex-col  justify-center items-center w-full ">
          <form
            onSubmit={handleSubmit}
            className=" bg-slate-100 w-full flex flex-col justify-between p-10 lg:max-w-[1500px] px-5 "
          >
            <h2 className="font-bold text-3xl">Book a car</h2>
            {errorMessage && (
              <div className="w-full bg-red-500 p-2 mt-3 rounded-md">
                All fields required!
              </div>
            )}
            {successMessage && (
              <div className="w-full bg-green-500 p-2 mt-3 rounded-md">
                Success!
              </div>
            )}
            <div className="mt-5 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
              <Dropdown
                icon={<PiCarSimpleFill />}
                handleChange={handleChange}
                value={formData.carType}
                name="carType"
                items={carTypes}
                text="Select Your Car Type"
              />
              <Dropdown
                icon={<FaLocationDot />}
                handleChange={handleChange}
                value={formData.pickUpLocation}
                name="pickUpLocation"
                items={locations}
                text="Select Pickup Location"
              />
              <Dropdown
                icon={<FaLocationDot />}
                handleChange={handleChange}
                value={formData.dropOffLocation}
                name="dropOffLocation"
                items={locations}
                text="Select Drop Off Location"
              />
              <Date
                value={formData.pickUpDate}
                handleChange={handleChange}
                name="pickUpDate"
                text="Pick-up"
              />
              <Date
                value={formData.dropOffDate}
                handleChange={handleChange}
                name="dropOffDate"
                text="Drop-off"
              />
              <div className="flex flex-col gap-3 justify-end w-full">
                <button className="h-[65px] max-w-full text-white hover:shadow-lg hover:bg-[#de462f] transition-all duration-300 font-bold p-3 bg-[#FA4226] rounded-sm">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default BookCar;
