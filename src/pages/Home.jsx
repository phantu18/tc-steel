import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import OurProducts from "../components/OurProducts";
import ContactFaq from "../components/ContactFaq";
import Map from "../components/Map";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="projects">
        <OurProducts />
      </section>
      <section id="contact">
        <ContactFaq />
        <Map />
      </section>
    </>
  );
}
