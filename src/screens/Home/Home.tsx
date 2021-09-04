import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import HomeCategory from "../../components/HomeCategory/HomeCategory";
import MadeInfo from "../../components/MadeInfo/MadeInfo";
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  return (
    <div className="text-lighting-thief">
      <Navigation />
      <Hero />
      <HomeCategory />
      <MadeInfo />
      <Footer />
    </div>
  );
};

export default Home;
