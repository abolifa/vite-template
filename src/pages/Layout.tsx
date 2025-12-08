import FooterFresco from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterFresco />
    </div>
  );
};

export default Layout;
