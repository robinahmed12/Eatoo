import Image from "next/image";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";
import WhyChooseUs from "./components/WhyChooseUse";
import TrustedSection from "./components/TrustedSection";


export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <Pricing />
        <WhyChooseUs />
        <TrustedSection />
      </div>
    </>
  );
}
