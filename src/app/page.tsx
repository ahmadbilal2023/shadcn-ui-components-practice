import Hero from "@/view/Hero";
import Product from "@/view/product";
import Image from "next/image";
import { MenubarDemo } from "./components/menuBar";
import MiddleSection from "@/view/middleSection";
import Subscribe from "@/view/subscribe";

export default function Home() {
  return <div>
    <Hero/>
    <Product/>
    <MiddleSection/>
    <Subscribe/>
  </div>;
}
