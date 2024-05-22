import Hero2 from "../components/Hero2";
import Contact from "../components/Contact";
import Container from "../components/Container";
import TeamMembers from "../pageComponents/team/TeamMembers";

const TeamPage = () => {
  return (
    <div className="flex flex-col gap-[150px]">
      <Hero2 title="Team" />
      <Container>
        <TeamMembers />
      </Container>
      <Contact />
    </div>
  );
};

export default TeamPage;
