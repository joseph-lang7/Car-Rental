import Container from "./Container";
import googlePlay from "/icons/googlePlayIcon.svg";
import appStore from "/icons/appStoreIcon.svg";
import mockUp from "/mockUp.png";
const OurApp = () => {
  return (
    <Container>
      <div className="w-full flex justify-center">
        <div className="max-w-[1500px] flex flex-col  lg:flex-row gap-5">
          <div className="flex flex-col gap-3 justify-center">
            <h2 className="font-bold text-4xl text-center">
              Download Our App!
            </h2>
            <div className="flex justify-center">
              <p className="text-center w-[300px]">
                Whether you&apos;re planning a weekend getaway or a business
                trip, our intuitive app puts the power of renting a car right at
                your fingertips.{" "}
              </p>
            </div>
            <div className="flex items-center justify-center gap-5">
              <img
                className="h-[100px] w-[100px]"
                src={googlePlay}
                alt="Google play store icon"
              />
              <img
                className="h-[100px] w-[100px]"
                src={appStore}
                alt="App store icon"
              />
            </div>
          </div>
          <div className="hidden xl:block">
            <img src={mockUp} alt="Car Rental app mock up" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurApp;
