"use client"
import Link from "next/link"
import React from "react"

const projects = [
  {
    name: "Westin Hospitals Website",
    description:
      "Designed and developed the complete website for Westin Hospitals using HTML and CSS, ensuring a responsive, visually appealing, and user-friendly experience. Focused on clean UI, intuitive navigation, and accessibility for a seamless browsing experience.",
    imageUrl: "/og-logo.jpg",
    githubUrl: "https://github.com/tusharansal23/westinHospital",
    liveUrl: "https://www.westinhospitals.com",
  },
  {
    name: "Centilium Immigration Consultancy Website & Dashboard",
    description: "Developed a comprehensive immigration consultancy website and an interactive dashboard using the MERN stack. Implemented a meeting booking feature, enabling seamless appointment scheduling. Focused on a responsive design, secure authentication, and an intuitive user experience to streamline client interactions.",
    imageUrl: "/centi-logo.png",
    githubUrl: "https://github.com/tusharansal23/Centilium-Production/tree/master",
    liveUrl: "https://www.centiliumimmigration.space/",
  },
  {
    name: "Unite Solar Website",
    description:
      "Designed and developed the Unite Solar website using HTML and CSS, creating a clean, responsive, and visually engaging platform. Ensured smooth navigation, optimized performance, and a user-friendly interface for an enhanced browsing experience.",
    imageUrl: "/unite-logo.png",
    githubUrl: "https://github.com/tusharansal23/Unite-Solar",
    liveUrl: "https://unite-solar.vercel.app/",
  },
  {
    name: "parallax Website",
    description:
    "Designed and developed a single-page application using HTML and CSS, replicating a Figma wireframe with pixel-perfect accuracy. Ensured a visually engaging, responsive, and user-friendly layout.",
    imageUrl: "/spa.jpg",
    githubUrl: "https://github.com/tusharansal23/Single-page-design",
    liveUrl: "https://fyle-assignment-com-git-main-tushar-ansals-projects.vercel.app/",
  },
  {
    name: "Invoice Generator",
    description:
      "Developed a dynamic invoice generator with multi-page functionality, allowing businesses to input customer and seller details, customize branding (logo & company name), and automatically calculate itemized totals. The system generates a well-formatted, printable invoice, making it adaptable for any company",
    imageUrl: "/invoice.jpg",
    githubUrl: "https://github.com/tusharansal23/aurikaTech-Invoice",
    liveUrl: "https://aurika-tech-invoice.vercel.app/",
  },
  {
    name: "BizFinder",
    description:
      "Built a full-stack local business discovery platform where users can find nearby services by category and location, and business owners can list and manage their profiles through a secure, responsive system",
    imageUrl: "/bizfinder.jpg",
    githubUrl: "https://github.com/tusharansal23/BizFinder",
    liveUrl: "https://biz-finder-eta.vercel.app/",
  },
  {
    name: "TheZirk",
    description:
      "Created a responsive real estate website to showcase premium property projects, featuring detailed listings, image galleries, amenities, and location insights to enhance user engagement and brand credibility.",
    imageUrl: "/thezirk.jpg",
    githubUrl: "https://github.com/tusharansal23/the-zirk",
    liveUrl: "https://www.thezirk.biz/",
  }
]
interface ProjectsProps {
  limit?: number
}
const project: React.FC<ProjectsProps> = ({ limit }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row">
          {displayedProjects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 align-items-center">
                <img src={project.imageUrl || "/placeholder.svg"} alt={project.name} className="card-img-top img-dimen" />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer bg-white border-top-0">
                  <Link href={project.githubUrl} className="btn btn-outline-primary me-2">
                    <i className="bi bi-github me-2"></i>GitHub
                  </Link>
                  <Link href={project.liveUrl} className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right me-2"></i>Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {limit && (
          <div className="text-center mt-4">
            <Link href="/projects" className="btn btn-outline-primary">
              View More Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
export default project