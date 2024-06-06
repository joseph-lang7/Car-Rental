import PropTypes from "prop-types";
const CarDetail = ({ title, value }) => {
  return (
    <div className="grid grid-cols-2 border-2 text-center">
      <div className="border-r-2">{title}</div>
      <div>{value}</div>
    </div>
  );
};
CarDetail.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CarDetail;
