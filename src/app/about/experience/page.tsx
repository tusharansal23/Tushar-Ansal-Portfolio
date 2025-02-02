"use client"

import { useEffect, useState } from "react"

const experiences = [
  {
    title: "Freelance Developer",
    company: "Self",
    // period: "Jan 2023 - Present",
    startDate: "2023-01-01",
    endDate: "present",
    description:
    "Lead developer for various high-impact freelance projects, guiding clients through technical decisions, mentoring collaborators, and implementing best practices for code quality and performance optimization.",
  },
  {
    title: "Freelance Developer",
    company: "Teqdeft",
    // period: "January 2021 – December 2022",
    startDate: "2021-02-01",
    endDate: "2022-12-19",
    description:
      "Developed and maintained various web applications using React, Node.js, and MongoDB. Collaborated with design team to implement responsive and accessible user interfaces.",
  },
  {
    title: "Software  Developer",
    company: "Nagarro pvt ltd.",
    // period: " September 2019 – January 2021",
    startDate: "2019-09-26",
    endDate: "2021-01-31",
    description:
      "Assisted in the development of company websites and internal tools. Gained experience in front-end, back-end technologies and version control systems.",
  },
]

export default function Experience() {
  const [formattedDates, setFormattedDates] = useState<string[]>([])

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" })
    const formatted = experiences.map((exp) => {
      const start = new Date(exp.startDate)
      const end = exp.endDate === "present" ? new Date() : new Date(exp.endDate)
      return `${formatter.format(start)} - ${exp.endDate === "present" ? "Present" : formatter.format(end)}`
    })
    setFormattedDates(formatted)
  }, [])

  return (
    <section className="mb-5">
      <h2 className="mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h3 className="card-title h5">{exp.title}</h3>
            <h4 className="card-subtitle mb-2 text-muted h6">{exp.company}</h4>
            <p className="card-text text-muted small">{formattedDates[index]}</p>
            <p className="card-text">{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}





// export default function Experience() {
//     const experiences = [
//       {
//         title: "Freelance Developer",
//         company: "Self",
//         period: "Jan 2023 - Present",
//         description:
//         "Lead developer for various high-impact freelance projects, guiding clients through technical decisions, mentoring collaborators, and implementing best practices for code quality and performance optimization.",
//       },
//       {
//         title: "Freelance Developer",
//         company: "Teqdeft",
//         period: "January 2021 – December 2022",
//         description:
//           "Developed and maintained various web applications using React, Node.js, and MongoDB. Collaborated with design team to implement responsive and accessible user interfaces.",
//       },
//       {
//         title: "Software  Developer",
//         company: "Nagarro pvt ltd.",
//         period: " September 2019 – January 2021",
//         description:
//           "Assisted in the development of company websites and internal tools. Gained experience in front-end, back-end technologies and version control systems.",
//       },
//     ]
  
//     return (
//       <section className="mb-5">
//         <h2 className="mb-4">Experience</h2>
//         {experiences.map((exp, index) => (
//           <div key={index} className="card mb-3">
//             <div className="card-body">
//               <h3 className="card-title h5">{exp.title}</h3>
//               <h4 className="card-subtitle mb-2 text-muted h6">{exp.company}</h4>
//               <p className="card-text text-muted small">{exp.period}</p>
//               <p className="card-text">{exp.description}</p>
//             </div>
//           </div>
//         ))}
//       </section>
//     )
//   }
  
  