"use client"
export default function Skills() {
    const skills = [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 70 },
      { name: "HTML/CSS", level: 95 },
    ]
  
    return (
      <>
      {/* <Header /> */}
      <section className="mb-5">
        <h2 className="mb-4">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 mb-3">
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
      </section>
      {/* <Footer /> */}
      </>
    )
  }
  
  