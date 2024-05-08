const ProfileCard = ({ name, role, photo }) => {
  return (
    <div className="flex flex-col items-center w-[400px] h-[650px] shadow-xl">
      <div className="w-full h-full ">
        <img
          className="w-full h-[500px] object-cover "
          src={photo}
          alt="Profile picture"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="text-slate-500 font-bold">{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
