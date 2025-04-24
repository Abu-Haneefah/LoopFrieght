
import Hero from "@/components/Hero/Hero";
import OurNetwork from "@/components/OurNetwork/OurNetwork";
import ReadyToMove from "@/components/ReadyToMove/ReadyToMove";
import SmartLogistics from "@/components/SmartLogistics/SmartLogistics";
import WhyChooseSection from "@/components/WhyChooseUs/WhyChooseUs";
import Footer from "@/components/Footer/Footer";
import OurClients from "@/components/OurClients/OurClients";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <OurClients />
      <SmartLogistics />
      <WhyChooseSection />
      <OurNetwork />
      <ReadyToMove />
      <Footer />
    </div>
  );
}

