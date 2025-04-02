import {
  FeatureItems,
  Features,
  NewItems,
  Products,
  SalesProduct,
} from "@components/EzyStore";
import { HeroSection } from "@components/EzyStore";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <FeatureItems />
      <NewItems />
      <Products />
      <SalesProduct />
    </div>
  );
};

export default HomePage;
