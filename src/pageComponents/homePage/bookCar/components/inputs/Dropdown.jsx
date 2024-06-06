import PropTypes from "prop-types";
const Dropdown = ({ icon, handleChange, value, name, text, items }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex gap-2 items-center">
        {icon}
        <p>
          Select Your Car Type <span className="text-red-500">*</span>
        </p>
      </div>
      <select
        onChange={handleChange}
        value={value}
        name={name}
        className="h-[65px] p-3 text-slate-400 max-w-full"
      >
        <option>{text}</option>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
Dropdown.propTypes = {
  icon: PropTypes.element,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
};
export default Dropdown;
