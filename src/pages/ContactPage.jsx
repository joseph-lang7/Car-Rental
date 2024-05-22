import Container from "../components/Container";
import Hero2 from "../components/Hero2";
import Contact from "../components/Contact";
import Info from "../pageComponents/contact/Info";
import Form from "../pageComponents/contact/Form";

const ContactPage = () => {
  return (
    <>
      <Hero2 title="Contact" />
      <div className="flex flex-col gap-[150px]">
        <Container>
          <div className="flex justify-center mt-20">
            <div className="flex flex-col gap-8 lg:flex-row max-w-[1500px]">
              <Info />
              <Form />
            </div>
          </div>
        </Container>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
