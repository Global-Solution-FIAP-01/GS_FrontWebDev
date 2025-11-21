import Hero from "./components/Hero";
import Description from "./components/Description";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center pt-20">
      <Header />
      <Hero />
      <Description />
      <CardSection />
      <Footer />
    </section>
  );
}


export default Home;
