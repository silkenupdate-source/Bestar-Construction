import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Instagram, Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-blue-950 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-white leading-none">
                BESTAR
              </span>
              <span className="text-xs font-semibold text-yellow-500 tracking-widest uppercase">
                Construction
              </span>
            </Link>
            <p className="text-sm mt-4 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href={siteConfig.links.home} className="text-sm hover:text-yellow-500 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-yellow-500" /> Home
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.about} className="text-sm hover:text-yellow-500 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-yellow-500" /> About Us
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.services} className="text-sm hover:text-yellow-500 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-yellow-500" /> Services
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.projects} className="text-sm hover:text-yellow-500 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-yellow-500" /> Projects
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.contact} className="text-sm hover:text-yellow-500 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-yellow-500" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`${siteConfig.links.services}#${service.id}`} className="text-sm hover:text-yellow-500 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-yellow-500" /> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{siteConfig.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {siteConfig.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm hover:text-white transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Socials */}
          <div className="flex flex-col lg:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-2 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-yellow-500"></span>
            </h3>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              Subscribe to stay updated on our latest projects and architectural news.
            </p>
            <div className="mt-4 relative flex rounded-md overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-500">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />
              <button 
                type="button"
                aria-label="Subscribe to newsletter"
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-950 transition-colors px-4 flex items-center justify-center shrink-0 font-bold"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
            
            <div className="flex items-center gap-3 mt-6">
              <Link 
                href={siteConfig.socials?.facebook || "#"} 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-blue-900/60 hover:bg-yellow-500 text-gray-200 hover:text-blue-950 border border-blue-800/80 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </Link>
              <Link 
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-blue-900/60 hover:bg-yellow-500 text-gray-200 hover:text-blue-950 border border-blue-800/80 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </Link>
              <Link 
                href={siteConfig.socials?.instagram || "#"} 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-blue-900/60 hover:bg-yellow-500 text-gray-200 hover:text-blue-950 border border-blue-800/80 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
