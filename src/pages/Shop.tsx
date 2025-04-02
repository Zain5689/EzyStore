import { CustomHeading } from "@components/common";
import { ProductListing } from "@components/EzyStore";

const Shop = () => {
  return (
    <div>
      <CustomHeading subTitle={"Shop"} title={"Shop"} />
      <ProductListing />
    </div>
  );
};

export default Shop;
