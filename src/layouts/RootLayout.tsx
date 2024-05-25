// import { ReactNode } from "react";
import Header from "../components/header/Header";
import BackToTop from "../components/general-shared/back-to-top";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

// type RootLayoutProps = {
//   children: ReactNode;
// };

const RootLayout = () => {
  return (
    <div>
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
