import { Outlet } from "react-router-dom";
import { EzyStoreFooter, EzyStoreHeader } from "@components/common";

const MainLayout = () => (
  <div>
    <EzyStoreHeader />
    <div>
      <Outlet />
    </div>
    <EzyStoreFooter />
  </div>
);

export default MainLayout;
