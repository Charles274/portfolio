import { useState } from "react";

const ContactSection = () => {
  const whatsappNumber = "+233544803023";
  const message = "Hello, I'm interested in your portfolio!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Let's Connect! Want to discuss a project, collaboration, or just say
            hello? This is the place to reach out! You can find my contact
            information, social media links, and a convenient message form to
            get in touch with me. I'd love to hear from you and explore ways we
            can work together or share ideas.
          </p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch card contact-card">
            <div className="card-header">Reach Out to Me</div>
            <div className="info card-body">
              <div className="address d-flex mb-3 align-items-center">
                <i className="bi bi-geo-alt"></i>
                <h4>Location: Accra, Ghana</h4>
              </div>

              <div className="email d-flex mb-3 align-items-center">
                <i className="bi bi-envelope"></i>
                {/* <!-- Email link --> */}
                <a href="mailto:charles274@live.com"> Send Email </a>
              </div>

              <div className="phone d-flex mb-3 align-items-center">
                <i className="bi bi-phone"></i>
                <a href="tel:+233544803023"> Call Me </a>
              </div>

              <div className="phone whatsapp d-flex mb-3 align-items-center ">
                <i className="bi bi-whatsapp"></i>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-text"
                >
                  Text me on WhatsApp
                </a>
              </div>

              {/* style={{border: 0; width: 100%; height: 290px}} */}
              {/* frameborder={0} */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5485925302075!2d-0.20311638529444034!3d5.603716995946975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9adbf53bc1af%3A0x15ff084d8f1c157!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1622489380335!5m2!1sen!2sus"
                style={{ border: "0", width: "100%", height: "290px" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <div className="card w-100 contact-card">
              <div className="card-header">
                Or Send Me A Quick Message From Here.
              </div>
              <div className="card-body">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // const handleChangeFormData = (e) => {
  //   const updatedFormData = { ...formData };
  //   setFormData(updatedFormData);
  // };

  return (
    <form method="post" role="form" className="contact-form" netlify>
      {/* Name */}
      <div className="row">
        <div className="form-group col-md-12">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            // value={formData.name}
            required
          />
        </div>
      </div>

      <div className="row">
        {/* Phone */}
        <div className="form-group col-md-6">
          <label htmlFor="name">Your Phone</label>
          <input
            type="tel"
            className="form-control form-control-sm"
            name="phone"
            id="phone"
            required
            // value={formData.phone}
          />
        </div>
        {/* Email */}
        <div className="form-group col-md-6">
          <label htmlFor="name">Your Email</label>
          <input
            type="email"
            className="form-control form-control-sm"
            name="email"
            id="email"
            // value={formData.email}
            required
          />
        </div>
      </div>

      {/* Subject */}

      <div className="form-group">
        <label htmlFor="name">Subject</label>
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          required
          // value={formData.message}
        />
      </div>

      {/* Message */}

      <div className="form-group">
        <label htmlFor="name">Message</label>
        <textarea
          className="form-control"
          name="message"
          rows={10}
          required
        ></textarea>
      </div>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message"></div>
        <div className="sent-message">
          Your message has been sent. Thank you!
        </div>
      </div>
      <div className="text-center ">
        <button className="card-footer" type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
};
