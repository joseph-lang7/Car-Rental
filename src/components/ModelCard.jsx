import { TiStar } from "react-icons/ti";
import { FaCarSide } from "react-icons/fa";

const ModelCard = ({
  image,
  alt,
  price,
  model,
  brand,
  transmission,
  doors,
  fuel,
}) => {
  return (
    <div className="flex flex-col items-center w-[380px] h-[600px] border-2">
      {/* Image */}
      <div className="w-full">
        <img className="h-[250px] w-full object-cover" src={image} alt={alt} />
      </div>
      <div className="flex items-center h-full">
        {/* Text Content */}
        <div className="w-[250px]">
          {/* details */}
          <div className="w-full flex justify-between mb-3">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-xl">{model}</h2>
              <div className="flex gap-[2px]">
                <TiStar size={18} />
                <TiStar size={18} />
                <TiStar size={18} />
                <TiStar size={18} />
                <TiStar size={18} />
              </div>
            </div>
            <div className="text-right flex flex-col">
              <p className="font-bold text-2xl">${price}</p>
              <p className="text-slate-500">per day</p>
            </div>
          </div>
          {/* icons */}
          <div className="w-full grid grid-cols-2 gap-2 text-slate-500">
            <div className="flex items-center gap-2">
              <FaCarSide />
              <span>{brand}</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span>{doors} / 5</span>
              <FaCarSide />
            </div>
            <div className="flex items-center gap-2 ">
              <FaCarSide />
              <span>{transmission}</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span>{fuel}</span>
              <FaCarSide />
            </div>
          </div>
          <div className="my-5 bg-slate-500">
            <hr />
          </div>
          <button className="w-full text-sm text-white hover:shadow-lg hover:bg-[#de462f] transition-all duration-300 font-bold p-3 bg-[#FA4226] rounded-sm">
            Book Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
