import { useState } from "react";
import { PiCarSimpleFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

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
  const carTypes = ["Car 1", "Car 2", "Car 3", "Car 4", "Car 5", "Car 6"];
  const locations = [
    "Los Angeles",
    "San Francisco",
    "San Diego",
    "Sacramento",
    "Santa Rosa",
  ];

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
      if (!formData[field]) {
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, "4000");
      } else {
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
      }
    }
  };
  return (
    <div className="flex flex-col  justify-center items-center w-full h-auto ">
      <form
        onSubmit={handleSubmit}
        className=" bg-slate-100 w-full flex flex-col justify-between md:max-w-[1500px] p-10"
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
        <div className="mt-5 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
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
              className="p-3 text-slate-400 max-w-full"
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
              className="p-3 text-slate-400 max-w-full"
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
              className="p-3 text-slate-400 max-w-full"
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
              className="p-3 text-slate-400 max-w-full"
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
              className="p-3 text-slate-400 max-w-full"
              type="date"
              name="dropOffDate"
              value={formData.dropOffDate}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-3 justify-end w-full">
            <button className="max-w-full text-sm text-white hover:shadow-lg hover:bg-[#de462f] transition-all duration-300 font-bold p-3 bg-[#FA4226] rounded-sm">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookCar;
