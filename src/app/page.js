"use client";
import Image from "next/image";
// import App from "../_app.js";
import App from "next/app";
import Index from "../index";

//INTERMAL import
import { TrackingProvider } from "../../Context/Tracking";
import { NavBar, Footer } from "../../Components";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <NavBar />
        {/* <Component {...pageProps} /> */}
        <Index />
      </TrackingProvider>
      <Footer />
    </>
  );
}
