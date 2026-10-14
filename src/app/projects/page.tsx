import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Projects",
  description: "Browse the portfolio of construction, renovation, and engineering projects by Bestar Construction.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-blue-950 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Projects</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A showcase of our capabilities, demonstrating precision, quality, and architectural excellence across all our builds.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Simple grid without complex client-side filtering for robust server-side rendering */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                <div className="relative aspect-[4/3] bg-blue-100 overflow-hidden group">
                  <Image
                    src={project.mainImage}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-black text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                    <span className="ml-auto text-xs font-semibold px-2 py-1 bg-gray-100 rounded-full text-blue-900">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{project.description}</p>
                  
                  {project.gallery && project.gallery.length > 0 && (
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-gray-500 block mb-2">Site Progress & Details:</span>
                      <div className="grid grid-cols-2 gap-2">
                        {project.gallery.map((img, idx) => (
                          <div key={idx} className="relative aspect-[16/10] rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                            <Image
                              src={img}
                              alt={`${project.name} gallery photo ${idx + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.isDemo && (
                    <div className="text-xs text-yellow-600 bg-yellow-50 p-2 rounded mb-4 font-medium">
                      Note: This is a placeholder demonstration project.
                    </div>
                  )}
                  
                  <Button variant="outline" className="w-full text-blue-950 border-gray-200 hover:bg-gray-50">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-6">Have a Project in Mind?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">
            Our team is ready to discuss your ideas and provide a detailed quotation for your construction needs.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold px-8">
            <Link href={siteConfig.links.contact}>Request a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
