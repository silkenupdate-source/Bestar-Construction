import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, HardHat, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/config/services";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Bestar Construction Site"
            fill
            sizes="100vw"
            quality={95}
            className="object-cover"
            priority
          />
          {/* Clean directional gradient overlay ensuring text contrast while keeping image bright and clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-blue-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center md:text-left">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Building Excellence. <br />
              <span className="text-yellow-500">Creating the Future.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              From concept to completion, Bestar Construction delivers quality-driven construction solutions built around your vision, your needs, and your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold">
                <Link href={siteConfig.links.contact}>Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-950 font-bold">
                <Link href={siteConfig.links.projects}>Explore Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Value Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Quality Craftsmanship", desc: "Uncompromising standards in every detail of the build." },
              { icon: Clock, title: "Reliable Project Delivery", desc: "We respect timelines and budgets for smooth execution." },
              { icon: HardHat, title: "Safety & Professionalism", desc: "Strict adherence to safety protocols and regulations." },
              { icon: CheckCircle2, title: "Client-Focused Solutions", desc: "Tailored approaches that meet your unique requirements." }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 space-y-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 mb-2">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-sm tracking-wide">
                ABOUT BESTAR CONSTRUCTION
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 leading-tight">
                Built on Trust.<br /> Driven by Quality.
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Bestar Construction approaches every building project through careful planning, skilled execution, quality materials, and effective communication.
                </p>
                <p>
                  We are committed to delivering structural integrity and aesthetic excellence across residential, commercial, and infrastructure projects in Yaoundé and beyond.
                </p>
              </div>
              <Button asChild variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-50">
                <Link href={siteConfig.links.about} className="flex items-center gap-2">
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="w-full lg:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100">
              <Image
                src="/images/about.jpg"
                alt="Bestar Construction Team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950">Our Expertise</h2>
            <p className="text-gray-600 text-lg">Comprehensive construction and engineering services tailored to bring your vision to reality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="group border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 space-y-4 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 line-clamp-3 flex-1">{service.description}</p>
                  <Link href={`${siteConfig.links.services}#${service.id}`} className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 pt-2 group-hover:underline">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-950 text-white hover:bg-blue-900">
              <Link href={siteConfig.links.services}>View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Projects That Shape Tomorrow</h2>
              <p className="text-blue-200 text-lg">Explore our portfolio of completed and ongoing construction projects demonstrating our commitment to quality.</p>
            </div>
            <Button asChild variant="outline" className="border-white text-blue-950 hover:bg-white hover:text-black">
              <Link href={siteConfig.links.projects}>View Portfolio</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-blue-900 shadow-lg">
                <Image
                  src={project.mainImage}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="inline-block px-3 py-1 bg-yellow-500 text-black text-xs font-bold uppercase tracking-wider rounded-sm mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" /> {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950">Our Construction Process</h2>
            <p className="text-gray-600 text-lg">A systematic approach ensuring clarity, quality, and timely delivery at every stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Consultation", desc: "Understand the client's vision, needs, and budget to establish project viability." },
              { num: "02", title: "Planning", desc: "Define the scope, timeline, specifications, and finalize the proposed budget." },
              { num: "03", title: "Construction", desc: "Coordinate the work, monitor quality, and communicate progress regularly." },
              { num: "04", title: "Handover", desc: "Complete the agreed scope, perform final checks, and hand over the project." }
            ].map((step, idx) => (
              <div key={idx} className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-extrabold text-yellow-100 absolute top-4 right-6 pointer-events-none">
                  {step.num}
                </div>
                <div className="pt-8 space-y-4">
                  <h3 className="text-xl font-bold text-blue-950">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6">Ready to Build Something Exceptional?</h2>
          <p className="text-xl text-blue-900/80 mb-10 max-w-2xl mx-auto font-medium">
            Tell us about your project. Let&apos;s discuss your vision and explore the right construction solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-blue-950 text-white hover:bg-blue-900 font-bold text-lg px-8 py-6 rounded-xl w-full sm:w-auto">
              <Link href={siteConfig.links.contact}>Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white font-bold text-lg px-8 py-6 rounded-xl w-full sm:w-auto">
              <a href={`tel:${siteConfig.phones[0].replace(/\s/g, '')}`}>Call Bestar Construction</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
