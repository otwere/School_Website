import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Users, Send, Globe, AlertCircle, CheckCircle } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone field
    county: "", // Added county field
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null); // State for phone validation error

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number before submission
    if (!/^\d{10,12}$/.test(formData.phone)) {
      setPhoneError("Phone number must be 10 to 12 digits.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "", // Reset phone field
        county: "", // Reset county field
        subject: "",
        message: ""
      });
      setPhoneError(null); // Clear phone error on success
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numeric input
    if (/^\d*$/.test(value)) {
      setFormData({ ...formData, phone: value });
      setPhoneError(null); // Clear error when input is valid
    } else {
      setPhoneError("Phone number must contain only numbers.");
    }
  };

  const handleCountyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, county: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+254 123 456 789",
      hoverEffect: "hover:text-blue-600",
      type: "phone"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@academyschool.com",
      hoverEffect: "hover:text-green-600",
      type: "email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "123 School Road, Nairobi",
      hoverEffect: "hover:text-red-600",
      type: "address"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      value: "Monday - Friday : 8am - 5pm\nSaturday : 8am - 1pm",
      hoverEffect: "hover:text-purple-600",
      type: "hours"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "#",
      icon: "facebook"
    },
    {
      name: "Twitter",
      url: "#",
      icon: "twitter"
    },
    {
      name: "Instagram",
      url: "#",
      icon: "instagram"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: "linkedin"
    }
  ];

  const counties = [
    "Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita-Taveta",
    "Garissa", "Wajir", "Mandera", "Marsabit", "Isiolo", "Meru", "Tharaka-Nithi",
    "Embu", "Kitui", "Machakos", "Makueni", "Nyandarua", "Nyeri", "Kirinyaga",
    "Murang'a", "Kiambu", "Turkana", "West Pokot", "Samburu", "Trans Nzoia",
    "Uasin Gishu", "Elgeyo Marakwet", "Nandi", "Baringo", "Laikipia", "Nakuru",
    "Narok", "Kajiado", "Kericho", "Bomet", "Kakamega", "Vihiga", "Bungoma",
    "Busia", "Siaya", "Kisumu", "Homa Bay", "Migori", "Kisii", "Nyamira", "Nairobi"
  ];
  

  return (
    <BackgroundWrapper>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-500">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600 italic">
            Get in touch with us for any inquiries
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-inherit  border rounded-xl shadow-sm p-8 transform transition-all duration-300 ">
              <h3 className="text-2xl font-semibold mb-6 text-gray-500">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map(info => (
                  <div
                    key={info.title}
                    className={`flex items-center space-x-4 transition-all duration-300 ${info.hoverEffect} cursor-pointer transform ${hoveredContact === info.type ? "scale-105" : ""}`}
                    onMouseEnter={() => setHoveredContact(info.type)}
                    onMouseLeave={() => setHoveredContact(null)}
                  >
                    <div className={`bg-gray-50 p-3 rounded-lg transition-colors duration-300 ${hoveredContact === info.type ? "bg-blue-50" : ""}`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      {info.value.split("\n").map((line, i) => (
                        <p key={i} className="text-gray-600">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Social Links */}
              <div className="mt-8 pt-8 border-t">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map(link => (
                    <a key={link.name} href={link.url} className="bg-gray-100 p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-110">
                      <Globe className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-inherit border rounded-xl shadow-sm p-8 transform transition-all duration-300 hover:shadow-none">
              <h3 className="text-2xl font-semibold mb-6">Admissions Office</h3>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-500">Admissions Team</p>
                  <p className="text-gray-600">+254 789 012 345</p>
                  <p className="text-gray-600">admissions@academyschool.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-inherit border rounded-xl shadow-sm p-8 transform transition-all duration-300 hover:shadow-none">
              <h3 className="text-2xl font-semibold mb-6 text-gray-500">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-0 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-0 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-0 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      pattern="\d{10,12}"
                      title="Phone number must be 10 to 12 digits."
                    />
                    {phoneError && (
                      <p className="text-sm text-red-600 mt-1">{phoneError}</p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      County
                    </label>
                    <select
                      required
                      value={formData.county}
                      onChange={handleCountyChange}
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-0 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select County</option>
                      {counties.map((county, index) => (
                        <option key={index} value={county}>
                          {county}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 p-3 focus:ring-0 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 p-3 focus:ring-0 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center px-6 py-3 rounded-lg text-white transition-all duration-300 transform hover:scale-105 ${isSubmitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                  {submitStatus !== "idle" && (
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${submitStatus === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                      {submitStatus === "success" ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Message sent successfully!</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5" />
                          <span>Error sending message. Please try again.</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden shadow-sm border transform transition-all duration-300 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364657313625!2d36.81669655!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f42bf45%3A0x5f90b818e1e7d92b!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1645567990000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
                className="transition-all duration-300 hover:opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default ContactPage;