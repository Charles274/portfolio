// Import Styles
import React from "react";
import "./App.css";
import "./assets/css/style.css";

//Providers
import { ActiveSectionProvider } from "./providers/ActiveSectionProvider";

//Browser
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import PortfolioDetails from "./pages/portfolio-details/portfolio-details";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Homepage />} />
      <Route path="details" element={<PortfolioDetails />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <ActiveSectionProvider>
      <RootLayout>
        <Homepage />
      </RootLayout>
    </ActiveSectionProvider>
  );
};

export default App;
