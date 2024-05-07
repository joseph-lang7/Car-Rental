// import hero2 from "/hero2img.jpg";
const Hero2 = ({ title }) => {
  return (
    <div
      className="w-screen h-[500px] object-cover"
      style={{
        backgroundImage: `url('/hero2-img.png')`,
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

export default Hero2;
