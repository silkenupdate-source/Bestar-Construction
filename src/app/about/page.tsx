import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About Us",
  description: "Learn about Bestar Construction, our mission, vision, and commitment to excellence in the construction industry.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-blue-950 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Discover the team, the vision, and the values that make Bestar Construction a leader in the building and engineering sector.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-extrabold text-blue-950">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Bestar Construction was founded on a simple yet powerful premise: to build structures that stand the test of time while delivering an unparalleled client experience. Based in Yaoundé, Cameroon, we have grown into a trusted partner for residential, commercial, and civil engineering projects.
                </p>
                <p>
                  Our team of seasoned architects, engineers, and construction professionals bring decades of combined experience to every site. We believe that true quality comes from a rigorous planning process, transparent communication, and an uncompromising dedication to craftsmanship.
                </p>
              </div>
              
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Mission & Vision</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-yellow-600 mb-2">Our Mission</h4>
                    <p className="text-sm text-gray-600">To deliver exceptional construction services through safe, sustainable, and innovative building practices.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-yellow-600 mb-2">Our Vision</h4>
                    <p className="text-sm text-gray-600">To be the premier construction company in Cameroon, known for shaping the future skyline and infrastructure of our nation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.jpg"
                alt="Bestar Construction professionals discussing plans"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-blue-950 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Integrity", desc: "Honesty and transparency in all our business practices and client relationships." },
              { title: "Excellence", desc: "A relentless pursuit of quality in materials, execution, and finishing." },
              { title: "Safety First", desc: "Prioritizing the health and well-being of our workers and the public on every site." },
              { title: "Innovation", desc: "Embracing modern construction technologies and sustainable building methods." },
              { title: "Accountability", desc: "Taking full responsibility for our timelines, budgets, and the final delivery." },
              { title: "Collaboration", desc: "Working closely with clients, architects, and subcontractors to achieve the best results." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-left">
                <CheckCircle2 className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-blue-950 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-6">Let&apos;s Build Together</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">
            Whether you are planning a new commercial development or a residential build, our team is ready to bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold px-8">
            <Link href={siteConfig.links.contact}>Contact Our Team <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
