import { ModelCard } from "../../../components";
import bentley from "/fleet/bentley.jpg";
import bmw from "/fleet/bmw.jpg";
import corvette from "/fleet/corvette.jpg";
import kia from "/fleet/kia.jpg";
import lamborghini from "/fleet/lamborghini.jpg";
import subaru from "/fleet/subaru.jpg";
const VehicleModels = () => {
  const vehicles = [
    {
      image: bmw,
      alt: "Picture of bmw m4",
      price: "40",
      model: "M4",
      brand: "BMW",
      transmission: "Automatic",
      doors: "2",
      fuel: "Gas",
    },
    {
      image: subaru,
      alt: "Picture of subaru wrx",
      price: "35",
      model: "WRX",
      brand: "Subaru",
      transmission: "Automatic",
      doors: "4",
      fuel: "Gas",
    },
    {
      image: bentley,
      alt: "Picture of bentley continental",
      price: "45",
      model: "Continental",
      brand: "Bentley",
      transmission: "Automatic",
      doors: "2",
      fuel: "Gas",
    },
    {
      image: corvette,
      alt: "Picture of corvette stingray",
      price: "40",
      model: "Stingray",
      brand: "Kia",
      transmission: "Automatic",
      doors: "2",
      fuel: "Gas",
    },
    {
      image: kia,
      alt: "Picture of kia stinger",
      price: "35",
      model: "Stinger",
      brand: "Kia",
      transmission: "Automatic",
      doors: "4",
      fuel: "Gas",
    },
    {
      image: lamborghini,
      alt: "Picture of lamborghini aventador",
      price: "45",
      model: "Aventador",
      brand: "Lamborghini",
      transmission: "Automatic",
      doors: "2",
      fuel: "Gas",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <ModelCard
          image={vehicles[0].image}
          alt={vehicles[0].alt}
          price={vehicles[0].price}
          model={vehicles[0].model}
          brand={vehicles[0].brand}
          transmission={vehicles[0].transmission}
          doors={vehicles[0].doors}
          fuel={vehicles[0].fuel}
        />
        <ModelCard
          image={vehicles[1].image}
          alt={vehicles[1].alt}
          price={vehicles[1].price}
          model={vehicles[1].model}
          brand={vehicles[1].brand}
          transmission={vehicles[1].transmission}
          doors={vehicles[1].doors}
          fuel={vehicles[1].fuel}
        />
        <ModelCard
          image={vehicles[2].image}
          alt={vehicles[2].alt}
          price={vehicles[2].price}
          model={vehicles[2].model}
          brand={vehicles[2].brand}
          transmission={vehicles[2].transmission}
          doors={vehicles[2].doors}
          fuel={vehicles[2].fuel}
        />
        <ModelCard
          image={vehicles[3].image}
          alt={vehicles[3].alt}
          price={vehicles[3].price}
          model={vehicles[3].model}
          brand={vehicles[3].brand}
          transmission={vehicles[3].transmission}
          doors={vehicles[3].doors}
          fuel={vehicles[3].fuel}
        />
        <ModelCard
          image={vehicles[4].image}
          alt={vehicles[4].alt}
          price={vehicles[4].price}
          model={vehicles[4].model}
          brand={vehicles[4].brand}
          transmission={vehicles[4].transmission}
          doors={vehicles[4].doors}
          fuel={vehicles[4].fuel}
        />
      </div>
    </div>
  );
};

export default VehicleModels;
