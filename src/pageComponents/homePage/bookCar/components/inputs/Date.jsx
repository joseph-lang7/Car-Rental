import { FaRegCalendarAlt } from "react-icons/fa";
import PropTypes from "prop-types";
const Date = ({ value, handleChange, name, text }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex gap-2 items-center">
        <FaRegCalendarAlt />

        <p>
          {text} <span className="text-red-500">*</span>
        </p>
      </div>
      <input
        className="h-[65px] p-3 text-slate-400 max-w-full"
        type="date"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
Date.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  handleChange: PropTypes.func,
};
export default Date;
