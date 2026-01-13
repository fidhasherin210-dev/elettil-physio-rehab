import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Sparkles, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "43/A, Elettil Vattoli,Kizhakkoth,Koduvally 673572",
    color: "from-[#E84D3D] to-[#c74031]",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 9446191909",
    link: "tel:+919446191909",
    color: "from-[#5B6B7C] to-[#4A5A6B]",
  },
  {
    icon: Mail,
    title: "Email",
    content: "elettilhospital@gmail.com",
    link: "mailto:elettilhospital@gmail.com",
    color: "from-[#E84D3D] to-[#c74031]",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
    color: "from-[#5B6B7C] to-[#4A5A6B]",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "919446191909"; // Replace with your WhatsApp number

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    const whatsappMessage = `
New Enquiry 🏥

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Get In Touch
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Contact <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Have questions or need assistance? We're here to help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Side - Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="group flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-300 cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-slate-600 text-sm leading-relaxed hover:text-red-500 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {info.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200 space-y-6 h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Send us a Message
              </h3>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 px-4 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 px-4 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  />
                </div>

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                />

                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 resize-none rounded-xl border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full h-12 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(to right, #E84D3D, #c74031)",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;