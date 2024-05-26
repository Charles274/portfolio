// import { ReactNode } from "react";
import BackToTop from "../components/local/general-shared/back-to-top";
import Footer from "../components/local/footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../components/local/header/Header";
import { BreadCrumbsNav } from "../components/local/navigation/bread-crumbs-nav/BreadCrumbsNav";

// type RootLayoutProps = {
//   children: ReactNode;
// };

const RootLayout = () => {
  return (
    <div className="site-container">
      <BreadCrumbsNav />
      <Header />
      {/* ===Outlet Here=== */}
      <Outlet />
      {/* ===Outlet Here=== */}

      <BackToTop />
      <Footer />
    </div>
  );
};

export default RootLayout;
