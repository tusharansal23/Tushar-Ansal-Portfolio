"use client"
export default function Education() {
    const education = [
      {
        degree: "Master of Computer Applications",
        school: "NIT Warangal",
        University: "National Institute of Technology",
        period: "2016 - 2019",
        description:
          'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Implementing Neural Networks for Natural Language Processing".',
      },
      {
        degree: "Bachelor of Computer Applications",
        school: "GGDSD-32",
        University: "Panjab University",
        period: "2012 - 2015",
        description: "Graduated with honors. Participated in multiple hackathons and coding competitions.",
      },
    ]
  
    return (
      <section className="mb-5">
        <h2 className="mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title h5">{edu.degree}</h3>
              <h4 className="card-subtitle mb-2 text-muted h6">{edu.school}</h4>
              <h4 className="card-subtitle mb-2 text-muted h6">{edu.University}</h4>
              <p className="card-text text-muted small">{edu.period}</p>
              <p className="card-text">{edu.description}</p>
            </div>
          </div>
        ))}
      </section>
    )
  }
  
  