"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Science from "@/components/Science";
import Scenarios from "@/components/Scenarios";
import Safety from "@/components/Safety";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Reviews />
      <Science />
      <Scenarios />
      <Safety />
      <FAQ />
      <Footer />
    </main>
  );
}
