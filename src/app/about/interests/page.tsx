"use client"
export default function Interests() {
    const interests = [
      { name: "Hiking", icon: "fa-solid fa-mountain" },
      { name: "Cooking", icon: "fa-solid fa-utensils" },
      { name: "Photography", icon: "fa-solid fa-camera" },
      { name: "Reading", icon: "fa-solid fa-book" },
      { name: "Traveling", icon: "fa-solid fa-plane" },
      { name: "Music", icon: "fa-solid fa-music" },
    ]
  
    return (
      <section className="mb-5">
        <h2 className="mb-4">Interests</h2>
        <div className="row">
          {interests.map((interest, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <i className={`${interest.icon} fa-2x mb-3 text-primary`}></i>
                  <h3 className="card-title h5">{interest.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  