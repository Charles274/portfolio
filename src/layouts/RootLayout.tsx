import { ReactNode } from "react";
import Header from "../components/header/Header";
import BackToTop from "../components/general-shared/back-to-top";
import Footer from "../components/footer/Footer";

type RootLayoutProps = {
  children: ReactNode;
};
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <BackToTop />
      <Footer />
    </div>
  );
};

export default RootLayout;
