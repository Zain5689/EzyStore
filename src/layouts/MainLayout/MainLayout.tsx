import { Outlet } from "react-router-dom";
import { Footer, Header } from "@components/common";

const MainLayout = () => (
  <div>
    <Header />
    <div>
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default MainLayout;
