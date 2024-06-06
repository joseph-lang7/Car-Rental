import { Contact, Container, Hero2 } from "../components";
import { VehicleModels } from "../pageComponents/vehicleModelsPage";
const VehicleModelsPage = () => {
  return (
    <div className="flex flex-col gap-[150px]">
      <Hero2 title="Vehicle Models" />
      <Container>
        <VehicleModels />
      </Container>
      <Contact />
    </div>
  );
};

export default VehicleModelsPage;
