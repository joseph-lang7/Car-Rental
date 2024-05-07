import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { FaCar } from "react-icons/fa6";

const RentingProcess = () => {
  return (
    <div className="flex flex-col  justify-center items-center w-full h-auto ">
      <div className=" w-full flex flex-col justify-between md:max-w-[1500px]">
        <h3 className="text-center text-xl font-bold mb-2">
          Plan your trip now
        </h3>
        <h2 className="text-center text-3xl font-bold">
          Quick and easy car rental
        </h2>
        <div className="mt-8 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2 items-center">
            <IoShieldCheckmarkSharp size={80} className="text-[#FA4226]" />
            <h3 className="font-bold text-xl">Select Car</h3>
            <p className="text-center max-w-[250px]">
              We offer a wide range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <BsPersonCheck size={80} className="text-[#FA4226]" />
            <h3 className="font-bold text-xl">Contact Operator</h3>
            <p className="text-center max-w-[250px]">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center ">
            <FaCar size={80} className="text-[#FA4226]" />
            <h3 className="font-bold text-xl">Let&apos;s Drive</h3>
            <p className="text-center max-w-[250px]">
              Whether you&apos;re hitting the open road, we&apos;ve got you
              covered with our wide range of cars.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentingProcess;
