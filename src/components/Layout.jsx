import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { NewsletterSection } from "../sections/NewsletterSection";

export const Layout = ({ children }) => (
  <>
    <Navbar />

    {children}

    <NewsletterSection />
    <Footer />
  </>
);
