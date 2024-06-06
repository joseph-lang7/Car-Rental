import { Hero2, Container, Reviews, Contact } from "../components";
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
