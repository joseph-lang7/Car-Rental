import { Contact, Hero2, Container } from "../components";
import { Form, Info } from "../pageComponents/contactPage";

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
