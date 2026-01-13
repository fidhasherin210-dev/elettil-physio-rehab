import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Building2,
  BedDouble,
  UserCheck,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description:
      "Our center is equipped with state-of-the-art rehabilitation technology and modern therapy tools to ensure the best clinical outcomes.",
  },
  {
    icon: BedDouble,
    title: "In-Patient (IP) Facilities",
    description:
      "We provide dedicated in-patient services for those requiring long-term care or intensive rehabilitation, ensuring a comfortable environment for recovery.",
  },
  {
    icon: UserCheck,
    title: "Expert Care",
    description:
      "Our team consists of highly qualified physiotherapists and healthcare professionals dedicated to personalized treatment plans.",
  },
  {
    icon: CalendarCheck,
    title: "Open Every Day",
    description:
      "To ensure continuity of care, our center remains functional all days of the week. We are here when you need us most.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
            <Sparkles className="w-4 h-4" />
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Excellence in Every
                       <span className="text-[#E84D3D]">
 Aspect of Care
</span>
</h2>

          <p className="text-muted-foreground text-lg">
            Experience the difference with our comprehensive approach to
            physiotherapy and rehabilitation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const hideOnMobile = index >= 2 && !showAll;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  card-elevated p-8 text-center group
                  ${hideOnMobile ? "hidden md:block" : ""}
                `}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                <h3 className="text-base font-bold text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* View More / View Less – Mobile only */}
        <div className="mt-10 flex justify-center md:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-all hover:scale-105"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
