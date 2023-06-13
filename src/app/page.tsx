import Hero from "@/view/Hero";
import Product from "@/view/product";
import Image from "next/image";
import { MenubarDemo } from "./components/menuBar";
import MiddleSection from "@/view/middleSection";

export default function Home() {
  return <div>
    <Hero/>
    <Product/>
    <MiddleSection/>
  </div>;
}
