import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Header from "@/components/header/Header";
import Service from "@/components/service/Service";
import BusinessGoal from "@/components/businessgoal/BusinessGoal";
import Team from "@/components/team/Team";
import Feature from "@/components/feature/Feature";
import Testimonial from "@/components/testimonials/Testimonial";
import Blog from "@/components/blog/Blog";
import ContactForm from "@/components/contactform/ContactForm";
import Map from "@/components/map/Map";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/BackToTop";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <div className="#">

      <Header />
      <Banner />
      <About />
      <Service /> 
      <BusinessGoal />
      <Team />
      <Feature />
      <Testimonial />
      <Blog />
      <ContactForm />
      <Map />
      <Footer />
      <BackToTop />

    </div>
  );
}