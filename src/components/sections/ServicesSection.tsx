import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Bone,
  Brain,
  HeartPulse,
  Activity,
  PersonStanding,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Orthopedic Rehabilitation",
    description:
      "Specialized treatment for joint replacements, fractures, arthritis, and chronic back or neck pain.",
  },
  {
    icon: Brain,
    title: "Neurological Rehabilitation",
    description:
      "Comprehensive recovery programs for stroke, Parkinson's disease, spinal cord injuries, and nerve disorders.",
  },
  {
    icon: HeartPulse,
    title: "Post-Surgical Recovery",
    description:
      "Structured physiotherapy programs designed to speed up recovery and restore function after surgery.",
  },
  {
    icon: Activity,
    title: "Sports Injury Management",
    description:
      "Advanced rehabilitation techniques to help athletes recover safely and return to peak performance.",
  },
  {
    icon: PersonStanding,
    title: "Geriatric Care",
    description:
      "Customized mobility, balance, and strength training programs tailored for elderly patients.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="services" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Our Core Services
            <Sparkles className="w-4 h-4" />
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Comprehensive            <span className="text-[#E84D3D]">
 Rehabilitation Solutions
 </span>
          </h2>

          <p className="text-muted-foreground text-lg">
            From orthopedic injuries to neurological conditions, we provide
            expert care across all rehabilitation needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const hideOnMobile = index >= 3 && !showAll;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
                  card-elevated p-8 group hover:border-primary/20
                  ${hideOnMobile ? "hidden md:block" : ""}
                `}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* View More / Show Less – Mobile only */}
        <div className="mt-10 text-center md:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-all hover:scale-105"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
