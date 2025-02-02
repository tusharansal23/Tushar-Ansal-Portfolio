"use client"
import Home from "./home/page"
import About from "./about/page"
import Projects from "./projects/page"
import Contact from "./contact/page"
import { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Inter } from "next/font/google"
import Script from "next/script"
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
        <Projects limit={3} />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  )
}

