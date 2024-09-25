import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/ui/NavBar.jsx";
import App from "./App.jsx";
import "./index.css";
import Cards from "./components/Cards/Cards.jsx";
import Accordion from "./components/Accordion/Accordion.jsx";
import { FooterWithSocialLinks } from "./components/ui/FooterWithSocialLinks.jsx";
import CryptoTable from "./components/CryptoTable/CryptoTable.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import Contact from "./components/Contact/Contact.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <NavBar />
      <App />
      <Carousel />
      <Cards />
      <CryptoTable />
      <Contact />
      <Accordion />
      <FooterWithSocialLinks />
    </NextUIProvider>
  </StrictMode>
);
