import { useState, useEffect } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FeaturedContent from "../FeaturedContent/FeaturedContent";
import Footer from "../Footer/Footer";
import OurTeam from "../OurTeam/OurTeam";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import ProductDesign from "../ProductDesign/ProductDesign";
import Project from "../Project/Project";
import Loader from "../../Loader/Loader";
import Scroll from "../../Utility/Scroll";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <PaymentMethod />
      <About />
      <Project />
      <ProductDesign />
      <OurTeam />
      <FeaturedContent />
      <Contact />
      <Footer />

      <div>
        <Scroll />
      </div>
    </div>
  );
};

export default Home;
