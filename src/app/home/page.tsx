import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <section id="home" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-4 text-gradient">Welcome to My Portfolio</h1>
            <p className="lead mb-4">I&apos;m a passionate web developer creating beautiful and functional websites.</p>
            <div className="d-flex gap-3 flex-wrap">
              <Link href="/about" className="btn btn-primary btn-lg">
                About Me
              </Link>
              <Link href="/projects" className="btn btn-outline-primary btn-lg">
                My Projects
              </Link>
              <Link href="/contact" className="btn btn-outline-secondary btn-lg">
                Contact
              </Link>
              <a href="/resume.pdf" download className="btn btn-success btn-lg">
                <i className="bi bi-download me-2"></i>Download Resume
              </a>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="position-relative">
              <div
                className="gradient-bg position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                style={{ filter: "blur(70px)", opacity: 0.7 }}
              ></div>
              <Image
                src="/hero.jpg"
                alt="Hero Image"
                width={500}
                height={500}
                className="img-fluid w-100 position-relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

