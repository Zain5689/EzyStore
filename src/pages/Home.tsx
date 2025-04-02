import {
  Blog,
  CompletedProject,
  FeaturedUsers,
  Features,
  HeroSection,
  OurTemplate,
  PricingPlans,
  SetupECommerce,
  Testimonials,
} from "@components/eCommerce";

const Home = () => {
  return (
    <div className="py-16">
      <HeroSection />
      <CompletedProject />
      <SetupECommerce />
      <OurTemplate />
      <Features />
      <PricingPlans />
      <FeaturedUsers />
      <Testimonials />
      <Blog />
    </div>
  );
};

export default Home;
