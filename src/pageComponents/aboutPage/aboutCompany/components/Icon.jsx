import PropTypes from "prop-types";
const Icon = ({ icon, amount, content }) => {
  return (
    <div className="flex flex-col gap-1 items-center ">
      <div className="text-[#FA4226] text-7xl">{icon}</div>
      <div className="flex flex-col lg:flex-row gap-3 items-center">
        <p className="font-bold text-4xl">{amount}</p>
        <p className="text-slate-500">{content}</p>
      </div>
    </div>
  );
};
Icon.propTypes = {
  icon: PropTypes.element,
  amount: PropTypes.number,
  content: PropTypes.string,
};

export default Icon;
