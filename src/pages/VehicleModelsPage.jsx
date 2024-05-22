import Hero2 from "../components/Hero2";
import Container from "../components/Container";
import Contact from "../components/Contact";
import VehicleModels from "../pageComponents/vehicle-models/VehicleModels";
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
