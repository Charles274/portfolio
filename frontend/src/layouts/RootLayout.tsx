// import { ReactNode } from "react";
import BackToTop from "../components/local/general-shared/back-to-top";
import Footer from "../components/local/footer/Footer";
import { Outlet } from "react-router-dom";
import MainSideNav from "../components/local/navigation/MainSideNav";
import { BreadCrumbsNav } from "../components/local/navigation/BreadCrumbsNav";

// type RootLayoutProps = {
//   children: ReactNode;
// };

const RootLayout = () => {
  return (
    <div className="site-container">
      <BreadCrumbsNav />
      <MainSideNav />
      {/* ===Outlet Here=== */}
      <Outlet />
      {/* ===Outlet Here=== */}

      <BackToTop />
      <Footer />
    </div>
  );
};

export default RootLayout;
