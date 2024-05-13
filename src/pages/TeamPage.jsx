import Hero2 from "../components/Hero2";
import Contact from "../components/Contact";
import Container from "../components/Container";
import ProfileCard from "../components/ProfileCard";
import salesman from "/staff/salesman.jpg";
import carDetailist from "/staff/cardetailist.jpg";
import ceo from "/staff/ceo.jpg";
import manager from "/staff/manager.jpg";
import mechanic from "/staff/mechanic.jpg";
import photographer from "/staff/photographer.jpg";
const TeamPage = () => {
  return (
    <div className="flex flex-col gap-[150px]">
      <Hero2 title="Team" />
      <Container>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-10">
            <ProfileCard name="James Smith" role="Salesman" photo={salesman} />
            <ProfileCard name="Olivia Taylor" role="CEO" photo={ceo} />
            <ProfileCard
              name="Michael Johnson"
              role="Mechanic"
              photo={mechanic}
            />
            <ProfileCard
              name="David Anderson"
              role="Car Detailist"
              photo={carDetailist}
            />
            <ProfileCard
              name="Sophia Hernandez"
              role="Manager"
              photo={manager}
            />
            <ProfileCard
              name="Emily Davis"
              role="Photographer"
              photo={photographer}
            />
          </div>
        </div>
      </Container>
      <Contact />
    </div>
  );
};

export default TeamPage;
