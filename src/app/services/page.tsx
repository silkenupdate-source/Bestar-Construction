import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Our Services",
  description: "Explore the comprehensive construction and engineering services offered by Bestar Construction.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-blue-950 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Comprehensive construction, engineering, and project management services designed to exceed your expectations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col lg:flex-row gap-12 items-center scroll-mt-24 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-blue-900 group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-extrabold text-blue-950">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button asChild className="bg-blue-950 text-white hover:bg-blue-900">
                    <Link href={siteConfig.links.contact}>Request Quotation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-20 bg-yellow-500 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-blue-950 mb-6">Need a custom solution?</h2>
          <p className="text-blue-950/80 mb-8 max-w-2xl mx-auto text-lg font-medium">
            Contact us to discuss your specific requirements. We tailor our construction services to fit the unique needs of your project.
          </p>
          <Button asChild size="lg" className="bg-blue-950 text-white hover:bg-blue-900 font-bold">
            <Link href={siteConfig.links.contact}>Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
