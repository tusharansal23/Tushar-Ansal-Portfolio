"use client"
import Home from "./home/page"
import About from "./about/page"
import Project from "./components/project"
import Contact from "./contact/page"
import Digital from "./components/digital"
import DigitalMarketing from "./digitalMarketing/page"
import { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import type React from "react"
// import About from "./components/about"

export default function App() {
  useEffect(() => {
    console.log("Tushar,If you're seeing hydration errors, please check if any browser extensions are modifying the DOM.")
  }, [])
  return (
    <>
      {/* <Header /> */}
      <main>
        <Home />
        <About />
        <Project limit={3} />
        <DigitalMarketing/>
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  )
}

