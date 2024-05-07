import { useEffect, useState } from "react";
import { PiCarSimpleFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPray, FaRegCalendarAlt } from "react-icons/fa";
import Container from "./Container";
import bentley from "/fleet/bentley.jpg";
import bmw from "/fleet/bmw.jpg";
import corvette from "/fleet/corvette.jpg";
import kia from "/fleet/kia.jpg";
import lamborghini from "/fleet/lamborghini.jpg";
import subaru from "/fleet/subaru.jpg";
const BookCar = () => {
  const [formData, setFormData] = useState({
    carType: "",
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    dropOffDate: "",
  });
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [search, setSearch] = useState(false);
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

  const [selectedCar, setSelectedCar] = useState("");

  // const manageModal = () => {
  //   setScrollPosition(window.scrollY);
  //   document.body.style.position = "fixed";
  //   document.body.style.top = `-${scrollPosition}px`;
  // };

  // useEffect(() => {
  //   setScrollPosition(window.scrollY);
  // }, [setScrollPosition]);

  const handleChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [input]: value,
    });
  };

  const handleClose = () => {
    setSearch(!search);
    // document.body.style.position = "";
    // document.body.style.top = "";

    // window.scrollTo(0, scrollPosition);
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
    console.log(formData);
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, "4000");
  };
  return (
    <>
      <Container>
        <div className="flex flex-col  justify-center items-center w-full h-auto ">
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
              <div className="flex flex-col gap-3 w-full">
                <div className="flex gap-2 items-center">
                  <PiCarSimpleFill />
                  <p>
                    Select Your Car Type <span className="text-red-500">*</span>
                  </p>
                </div>
                <select
                  onChange={handleChange}
                  value={formData.carType}
                  name="carType"
                  className="h-[65px] p-3 text-slate-400 max-w-full"
                >
                  <option>Select your car type</option>
                  {carTypes.map((carType) => (
                    <option key={carType} value={carType}>
                      {carType}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex gap-2 items-center">
                  <FaLocationDot />

                  <p>
                    Pick-up <span className="text-red-500">*</span>
                  </p>
                </div>
                <select
                  onChange={handleChange}
                  name="pickUpLocation"
                  value={formData.pickUpLocation}
                  className="h-[65px] p-3 text-slate-400 max-w-full"
                >
                  <option value="title">Select pick up location</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex gap-2 items-center">
                  <FaLocationDot />
                  <p>
                    Drop-off<span className="text-red-500">*</span>
                  </p>
                </div>
                <select
                  onChange={handleChange}
                  name="dropOffLocation"
                  value={formData.dropOffLocation}
                  className=" h-[65px] p-3 text-slate-400 max-w-full"
                >
                  <option value="title">Select drop off location</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex gap-2 items-center">
                  <FaRegCalendarAlt />

                  <p>
                    Pick-up <span className="text-red-500">*</span>
                  </p>
                </div>
                <input
                  className="h-[65px] p-3 text-slate-400 max-w-full"
                  type="date"
                  name="pickUpDate"
                  value={formData.pickUpDate}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex gap-2 items-center w-full">
                  <FaRegCalendarAlt />

                  <p>
                    Drop-off <span className="text-red-500">*</span>
                  </p>
                </div>
                <input
                  className="h-[65px] p-3 text-slate-400 max-w-full"
                  type="date"
                  name="dropOffDate"
                  value={formData.dropOffDate}
                  onChange={handleChange}
                />
              </div>
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
