import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Footprints, Bed, Sparkles } from "lucide-react";

const facilities = [
  { icon: Zap, label: "Advanced electrotherapy units" },
  { icon: Footprints, label: "Gait training and balance equipment" },
  { icon: Bed, label: "Comfortable in-patient rooms" },
  { icon: Sparkles, label: "Hygienic and patient-friendly environment" },
];

const FacilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="facilities" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Facilities Section
            <Sparkles className="w-4 h-4" />
          </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
              World-Class <span className="text-[#E84D3D]">

               Infrastructure
               </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our centre is equipped with the latest rehabilitation technology
              and designed for patient comfort, ensuring the best possible
              environment for your recovery journey.
            </p>

            <div className="space-y-4">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <facility.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">
                    {facility.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
                alt="Modern rehabilitation facility with advanced equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">
                  State-of-the-Art Equipment
                </h3>
                <p className="text-white/90">
                  Advanced technology for optimal patient outcomes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;