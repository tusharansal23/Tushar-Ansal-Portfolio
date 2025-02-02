"use client"
import Image from "next/image"
import Skills  from "./skills/page"
import Experience from "./experience/page"
import Education from "./education/page"
import Interests from "./interests/page"
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-5 section-title">About Me</h1>

      <section className="row align-items-center mb-5">
        <div className="col-lg-4 mb-4 mb-lg-0">
          <div className="position-relative">
            <div
              className="gradient-bg position-absolute top-0 start-0 w-100 h-100 rounded-circle"
              style={{ filter: "blur(70px)", opacity: 0.7 }}
            ></div>
            <Image
              src="/tushar.jpg"
              alt="Tushar Ansal"
              width={400}
              height={400}
              className="img-fluid rounded-circle position-relative"
            />
          </div>
        </div>
        <div className="col-lg-8"> 
        <h2 className="mb-3 text-gradient">
          <TypeAnimation
            sequence={["Hello, I&apos;m Tushar Ansal", 1500]} // 1500ms pause after typing
            speed={50} // Typing speed
            wrapper="span"
            repeat={Infinity} // Set to `0` or `false` if you don&apos;t want it to loop
          />
        </h2>
          <p className="lead mb-4">
          I&apos;m a passionate full-stack developer with extensive experience in creating beautiful, 
          functional, and user-centered digital experiences. I thrive on bringing innovative ideas 
          to life and constantly seek new ways to enhance user experiences through cutting-edge technology. 
          My expertise spans both front-end and back-end development, ensuring seamless and efficient 
          solutions tailored to my clients&apos; needs.
          </p>
          <p>
            Based in Chandigarh, I&apos;m a tech enthusiast who loves to code, solve problems, and learn 
            new technologies. When I&apos;m not in front of a computer screen, you can find me hiking in 
            the mountains or experimenting with new recipes in the kitchen.
          </p>
        </div>
      </section>

      <section className="mb-5">
        <h3 className="mb-4 section-title">What I Do</h3>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-laptop fs-1 text-primary mb-3"></i>
                <h4 className="card-title h5">Web Development</h4>
                <p className="card-text">Creating responsive and dynamic websites using the latest technologies.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-phone fs-1 text-primary mb-3"></i>
                <h4 className="card-title h5">Mobile Apps</h4>
                <p className="card-text">Developing cross-platform mobile applications for iOS and Android.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-palette fs-1 text-primary mb-3"></i>
                <h4 className="card-title h5">UI/UX Design</h4>
                <p className="card-text">Crafting intuitive and visually appealing user interfaces and experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Experience />
      <Education />
      <Interests />
    </div>
  )
}

