import CarDetail from "./CarDetail";
import PropTypes from "prop-types";
const CarDetails = ({ price, model, year, doors, ac, transmission, fuel }) => {
  return (
    <>
      <div className="bg-[#FA4226] w-full px-3 py-2 text-white flex items-center gap-2 justify-center">
        <span className="font-bold text-3xl">${price}</span>
        <p>
          <span className="text-xl text-white">/</span> rent per day
        </p>
      </div>
      <div className="w-full grid grid-cols-1">
        <CarDetail title="Model" value={model} />
        <CarDetail title="Year" value={year} />
        <CarDetail title="Doors" value={doors} />
        <CarDetail title="A/C" value={ac} />
        <CarDetail title="Transmission" value={transmission} />
        <CarDetail title="Fuel" value={fuel} />
      </div>
    </>
  );
};
CarDetails.propTypes = {
  price: PropTypes.number,
  model: PropTypes.string,
  year: PropTypes.string,
  doors: PropTypes.number,
  ac: PropTypes.string,
  transmission: PropTypes.string,
  fuel: PropTypes.string,
};

export default CarDetails;
