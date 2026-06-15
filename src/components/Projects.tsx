import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useCallback } from "react";

import salon from "../assets/project-salon.png";
import ecommerce from "../assets/project-ecommerce.png";
import school from "../assets/project-school.png";


const projects = [
  {
    id: "1",
    title: "Sri Vidyanikethan School",
    category: "Educational Website",
    description:
      "Sri Vidyanikethan Digital Campus – A modern school website featuring admissions, achievements, events, gallery, chatbot, and WhatsApp integration.",
    image: school,
    href: "https://srividyanikethanschool.vercel.app/",
  },

  
  {
    id: "2",
    title: "GlowUp Men Salon",
    category: "Salon Website",
    description:
      "Modern responsive salon website with stylish UI, appointment flow, and mobile-friendly design.",
    image: salon,
    href: "https://glowupmensolon-21qe.vercel.app/",
  },
  {
    id: "3",
    title: "MS Fashions",
    category: "E-commerce Website",
    description:
      "Fashion business website showcasing products, collections, and brand identity with responsive layouts.",
    image: ecommerce,
    href: "https://msfashions.vercel.app/",
  },
];

export const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">

        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm text-green-400 mb-2">
              SELECTED WORK
            </p>

            <h2 className="text-4xl font-bold text-white">
              Featured Projects
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="border border-gray-700 p-3 rounded-full"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={scrollNext}
              className="border border-gray-700 p-3 rounded-full"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">

            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="min-w-[85%] md:min-w-[45%] bg-[#111] rounded-2xl overflow-hidden border border-gray-800"
              >

                <div className="w-full h-[300px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-green-400 text-sm">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-bold text-white mt-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    {project.description}
                  </p>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-green-400 font-semibold"
                  >
                    View Demo
                    <ExternalLink size={18} />
                  </a>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};
