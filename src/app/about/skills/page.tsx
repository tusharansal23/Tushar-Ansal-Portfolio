"use client"

export default function Skills() {
  const skillCategories = {
    "Languages": [
      { name: "JavaScript", level: 90 },
      { name: "Java / J2EE", level: 87 },
      { name: "C++", level: 80 },  // Added C++
      { name: "PHP", level: 75 },
      { name: "SQL", level: 70 },
      { name: "HTML / CSS", level: 95 },
    ],
    "Frameworks & Libraries": [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Spring Boot", level: 78 },
      { name: "Express.js", level: 75 },
    ],
    "Databases": [
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 65 },
    ],
    "Cloud & DevOps": [
      { name: "AWS", level: 60 },
      { name: "Docker", level: 65 },
      { name: "Kubernetes", level: 55 },
    ],
    "Project Management & Collaboration": [  // Added JIRA & Confluence
      { name: "JIRA", level: 85 },
      { name: "Confluence", level: 80 },
      { name: "Git", level: 90 },
      { name: "Agile / Scrum", level: 80 },
    ],
  }

  return (
    <>
      {/* <Header /> */}
      <section className="mb-5">
        <h2 className="mb-4">Skills</h2>
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <div key={index} className="mb-4">
            <h4 className="mb-3 text-primary">{category}</h4>
            <div className="row">
              {skills.map((skill, idx) => (
                <div key={idx} className="col-md-6 mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      {/* <Footer /> */}
    </>
  )
}
