import Hero2 from "../components/Hero2";
import Container from "../components/Container";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
const TestimonialsPage = () => {
  return (
    <div className="flex flex-col gap-[150px]">
      <Hero2 title="Testimonials" />
      <Container>
        <Reviews />
      </Container>
      <Contact />
    </div>
  );
};

export default TestimonialsPage;
