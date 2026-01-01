import { FaSearch, FaBullhorn, FaFacebookF, FaGoogle } from "react-icons/fa";
import "./digitalMarketing.css";

export default function DigitalMarketing() {
  const services = [
    { name: "NorthCleaning Services", work: "Google Ads & SEO", icon: <FaGoogle /> },
    { name: "Seabird Education", work: "SEO & Meta Ads", icon: <FaBullhorn /> },
    { name: "Mukat Hospital", work: "SEO", icon: <FaSearch /> },
    { name: "Pawan Meat Shop", work: "Social Media Handling", icon: <FaFacebookF /> },
    { name: "Connet Technologies", work: "Social Media Handling", icon: <FaFacebookF /> },
    { name: "Amway Japan", work: "SEO", icon: <FaSearch /> },
    { name: "Designalytica", work: "SEO & Social Media", icon: <FaBullhorn /> },
    { name: "JAPE", work: "SEO & Social Media", icon: <FaBullhorn /> },
  ];

  return (
    <section id="digital-marketing" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center text-primary">🌟 Digital Marketing Services</h2>
        <p className="lead text-center mb-5 text-muted">
          Providing SEO, Google My Business optimization, Google Ads, Meta Ads, and Social Media Management for multiple clients.
        </p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm text-center h-100 p-3 hover-effect">
                <div className="icon mb-3 text-primary" style={{ fontSize: "2rem" }}>
                  {service.icon}
                </div>
                <h5 className="fw-bold">{service.name}</h5>
                <p className="text-muted">{service.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
