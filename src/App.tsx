// Import Styles
import React from "react";
import "./App.css";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
import ResumePage from "./pages/resume/ResumePage";
import EventsPage from "./pages/events/EventsPage";
// import DetailsPageLayout from "./layouts/DetailsPageLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="portfolio">
        <Route index element={<PortfolioPage />} />
        <Route path=":portfolioId/details" element={<PortfolioDetailsPage />} />
      </Route>
      <Route path="resume">
        <Route index element={<ResumePage />}></Route>
      </Route>
      <Route path="events">
        <Route index element={<EventsPage />}></Route>
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
