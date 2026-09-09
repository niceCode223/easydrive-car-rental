import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="contact-heading-animation text-center mb-12">
          <h1 className="text-blue-900 font-semibold uppercase tracking-wider text-sm">
            Get In Touch
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
            Contact Us
          </h2>

          <p className="text-center text-slate-600 mt-4 ">
            Have a question about our vehicles, bookings, or rental services?
            Send us a message and our team will be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* Contact Information */}
          <div
            className="
              contact-info-animation
              bg-blue-950 text-white rounded-2xl
              p-8 md:p-10 shadow-xl
              hover:shadow-2xl
              transition-all duration-500
            "
          >
            <h3 className="text-2xl font-bold mb-4">
              We’re Here to Help
            </h3>

            <p className="text-blue-100 leading-relaxed mb-8">
              Whether you need help choosing a vehicle, have questions about
              your booking, or need more information about our rental
              services, feel free to contact us.
            </p>

            <div className="space-y-6">

              {/* Phone */}
              <div className="contact-item flex items-start gap-4">
                <div className="contact-icon w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl">
                  ☎
                </div>

                <div>
                  <p className="text-sm text-blue-200">Phone</p>
                  <p className="font-semibold mt-1">
                    +27 10 123 4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item flex items-start gap-4">
                <div className="contact-icon w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-blue-200">Email</p>
                  <p className="font-semibold mt-1">
                    info@easydrive.co.za
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item flex items-start gap-4">
                <div className="contact-icon w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl">
                  📍
                </div>

                <div>
                  <p className="text-sm text-blue-200">Location</p>
                  <p className="font-semibold mt-1">
                    Johannesburg, South Africa
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-item flex items-start gap-4">
                <div className="contact-icon w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl">
                  🕒
                </div>

                <div>
                  <p className="text-sm text-blue-200">
                    Business Hours
                  </p>

                  <p className="font-semibold mt-1">
                    Monday – Sunday: 08:00 – 18:00
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div
            className="
              contact-form-animation
              bg-white rounded-2xl
              p-8 md:p-10 shadow-xl
              hover:shadow-2xl
              transition-all duration-500
            "
          >
            <h3 className="text-2xl font-bold text-blue-950 mb-6">
              Send Us a Message
            </h3>

            {/* Success Message */}
            {submitted && (
              <div
                className="
                  success-message-animation
                  mb-6 rounded-lg
                  bg-green-50 border border-green-200
                  text-green-700 px-4 py-3
                "
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div className="form-field-animation">
                <label className="block text-sm font-semibold text-blue-950 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="
                    w-full border border-slate-300
                    rounded-lg px-4 py-3 text-slate-800
                    outline-none
                    focus:ring-2 focus:ring-blue-800
                    focus:border-blue-800
                    transition-all duration-300
                  "
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="form-field-animation">
                  <label className="block text-sm font-semibold text-blue-950 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="
                      w-full border border-slate-300
                      rounded-lg px-4 py-3 text-slate-800
                      outline-none
                      focus:ring-2 focus:ring-blue-800
                      focus:border-blue-800
                      transition-all duration-300
                    "
                  />
                </div>

                <div className="form-field-animation">
                  <label className="block text-sm font-semibold text-blue-950 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 00 000 0000"
                    required
                    className="
                      w-full border border-slate-300
                      rounded-lg px-4 py-3 text-slate-800
                      outline-none
                      focus:ring-2 focus:ring-blue-800
                      focus:border-blue-800
                      transition-all duration-300
                    "
                  />
                </div>

              </div>

              {/* Message */}
              <div className="form-field-animation">
                <label className="block text-sm font-semibold text-blue-950 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="5"
                  required
                  className="
                    w-full border border-slate-300
                    rounded-lg px-4 py-3 text-slate-800
                    outline-none resize-none
                    focus:ring-2 focus:ring-blue-800
                    focus:border-blue-800
                    transition-all duration-300
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  contact-button-animation
                  w-full bg-blue-950
                  text-white py-3.5 rounded-lg
                  font-semibold
                  hover:bg-blue-900
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all duration-300
                "
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}


export default Contact;