"use client";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Services from "./components/services/services";
import Aboutus from "./components/aboutus/aboutus";
import Footer from "./components/footer/footer";

export default function Home() {
  console.log("user", process.env.MY_EMAIL);
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Aboutus />
      <Footer />
    </>
  );
}
