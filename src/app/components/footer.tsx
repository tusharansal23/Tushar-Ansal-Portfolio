"use client"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            {/* <p className="mb-0">&copy; {new Date().getFullYear()} Tushar Ansal. All rights reserved.</p> */}
            <p className="mb-0">&copy; 2025 Tushar Ansal. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link href="https://github.com/tusharansal23" className="text-dark me-3">
              <i className="bi bi-github"></i>
            </Link>
            <Link href="https://www.linkedin.com/in/tushar-a-36b474102?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-dark me-3">
              <i className="bi bi-linkedin"></i>
            </Link>
            {/* <Link href="https://twitter.com" className="text-dark">
              <i className="bi bi-twitter"></i>
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

