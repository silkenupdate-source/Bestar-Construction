"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formState, setFormState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });
    
    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit quotation inquiry.");
      }

      setFormState({
        status: "success",
        message: result.message || "Thank you for contacting Bestar Construction. Your inquiry has been submitted successfully."
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to submit quotation inquiry. Please check your connection or contact us via WhatsApp.";
      setFormState({
        status: "error",
        message: errorMessage
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-blue-950 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Get in touch with Bestar Construction for inquiries, project consultations, and quotations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 bg-blue-950 text-white p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-extrabold mb-2">Get In Touch</h2>
                <p className="text-blue-200 mb-12">
                  We are here to answer your questions and discuss your project needs.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Our Location</h3>
                      <p className="text-blue-200">{siteConfig.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Call Us</h3>
                      <div className="flex flex-col gap-1">
                        {siteConfig.phones.map((phone, idx) => (
                          <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="text-blue-200 hover:text-white transition-colors">
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <a href={`mailto:${siteConfig.email}`} className="text-blue-200 hover:text-white transition-colors break-all">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-blue-800">
                <Button asChild className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-bold">
                  <a href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {formState.status === "success" ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p>{formState.message}</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setFormState({ status: "idle", message: "" })}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formState.status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {formState.message}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                      <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                      <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</label>
                      <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all" placeholder="+237 ..." />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name (Optional)</label>
                      <input type="text" id="company" name="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all" placeholder="Company Ltd" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-gray-700">Type of Construction Project *</label>
                      <select required id="projectType" name="projectType" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all bg-white">
                        <option value="">Select Project Type</option>
                        <option value="residential">Residential Construction</option>
                        <option value="commercial">Commercial Construction</option>
                        <option value="civil">Civil Engineering / Infrastructure</option>
                        <option value="renovation">Renovation / Remodeling</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Project Description *</label>
                      <textarea required id="message" name="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your project, timeline, and requirements..."></textarea>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full sm:w-auto bg-blue-950 text-white hover:bg-blue-900 font-bold px-8"
                      disabled={formState.status === "submitting"}
                    >
                      {formState.status === "submitting" ? "Sending..." : "Submit Inquiry"}
                    </Button>
                    <p className="text-xs text-gray-500 mt-4">
                      By submitting this form, you agree to our privacy policy and consent to Bestar Construction contacting you regarding your inquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
