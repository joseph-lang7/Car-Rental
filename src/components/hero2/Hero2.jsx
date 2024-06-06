import PropTypes from "prop-types";
const Hero2 = ({ title }) => {
  return (
    <div
      className="max-w-screen h-[550px] "
      style={{
        backgroundImage: `url('/heroImages/hero2-img.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full flex flex-col justify-center text-black ml-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="font-bold">Home / {title} </p>
      </div>
    </div>
  );
};

Hero2.propTypes = {
  title: PropTypes.string,
};

export default Hero2;
