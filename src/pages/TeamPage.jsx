import { Hero2, Container, Contact } from "../components";
import { TeamMembers } from "../pageComponents/teamPage";
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
