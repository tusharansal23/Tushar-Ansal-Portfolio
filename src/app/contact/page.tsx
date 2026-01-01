"use client"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitMessage("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitMessage("Failed to send message. Please try again.")
      }
    } catch {
      setSubmitMessage("An error occurred. Please try again later.")
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Get in Touch</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="mb-4">Contact Information</h3>
            {/* <p>
              <strong>Address:</strong> Plot 23, GaneshVihar, Mohali, Punjab
            </p> */}
            <p>
              <strong>Email:</strong> tusharansal23@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91 73411 - 87639
            </p>
            <div className="mt-4">
              <h4 className="mb-3">Follow Me</h4>
              <a href="https://www.linkedin.com/in/tushar-a-36b474102?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn btn-outline-dark me-2">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/tusharansal23" className="btn btn-outline-dark me-2">
                <i className="bi bi-github"></i>
              </a>
              {/* <a href="#" className="btn btn-outline-dark">
                <i className="bi bi-twitter"></i>
              </a> */}
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitMessage && (
                <div
                  className={`mt-3 alert ${submitMessage.includes("successfully") ? "alert-success" : "alert-danger"}`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

