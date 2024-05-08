import Hero2 from "../components/Hero2";
import Container from "../components/Container";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
const TestimonialsPage = () => {
  return (
    <>
      <Hero2 title="Testimonials" />
      <Container>
        <Reviews />
      </Container>
      <Contact />
    </>
  );
};

export default TestimonialsPage;
