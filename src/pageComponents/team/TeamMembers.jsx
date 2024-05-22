import ProfileCard from "../../components/ProfileCard";
import salesman from "/staff/salesman.jpg";
import carDetailist from "/staff/cardetailist.jpg";
import ceo from "/staff/ceo.jpg";
import manager from "/staff/manager.jpg";
import mechanic from "/staff/mechanic.jpg";
import photographer from "/staff/photographer.jpg";
const TeamMembers = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        <ProfileCard name="James Smith" role="Salesman" photo={salesman} />
        <ProfileCard name="Olivia Taylor" role="CEO" photo={ceo} />
        <ProfileCard name="Michael Johnson" role="Mechanic" photo={mechanic} />
        <ProfileCard
          name="David Anderson"
          role="Car Detailist"
          photo={carDetailist}
        />
        <ProfileCard name="Sophia Hernandez" role="Manager" photo={manager} />
        <ProfileCard
          name="Emily Davis"
          role="Photographer"
          photo={photographer}
        />
      </div>
    </div>
  );
};

export default TeamMembers;
