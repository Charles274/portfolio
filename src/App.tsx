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
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import PortfolioDetailsPage from "./pages/portfolio/portfolio-details/PortfolioDetailsPage";
import RootLayout from "./layouts/RootLayout";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import NoMatch from "./pages/no-match/NoMatch";
// import DetailsPageLayout from "./layouts/DetailsPageLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="portfolio">
        <Route index element={<PortfolioPage />} />
        <Route path=":id/details/:slug" element={<PortfolioDetailsPage />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <ActiveSectionProvider>
      <RouterProvider router={router} />
    </ActiveSectionProvider>
  );
};

export default App;
