const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="card">
              <div className="card-header">Reach Out to Me</div>
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Madina, Accra, Ghana</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>charles274@.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call/Whatsapp:</h4>
                  <p>+233 544 803023</p>
                </div>

                {/* style={{border: 0; width: 100%; height: 290px}} */}
                {/* frameborder={0} */}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  style={{ border: "0", width: "100%", height: "290px" }}
                ></iframe>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-header">Or send me a direct message</div>
              <div className="card-body">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form "
                >
                  {/* Name */}
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    {/* Phone */}
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Phone</label>
                      <input
                        type="phone"
                        className="form-control form-control-sm"
                        name="phone"
                        id="phone"
                        required
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
