import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, Target, Stethoscope, TrendingUp, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Initial Assessment",
    description: "Detailed evaluation of condition and medical history",
  },
  {
    icon: Target,
    step: "02",
    title: "Personalized Treatment Plan",
    description: "Customized therapy goals and rehabilitation strategy",
  },
  {
    icon: Stethoscope,
    step: "03",
    title: "Therapy & Rehabilitation",
    description: "Hands-on therapy with modern equipment",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Progress Monitoring",
    description: "Regular assessment and plan adjustments",
  },
  {
    icon: ShieldCheck,
    step: "05",
    title: "Recovery & Maintenance",
    description: "Long-term wellness and injury prevention guidance",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Treatment Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary-foreground mt-3 mb-6">
            Your Journey to Recovery
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            A systematic approach to ensure the best possible outcomes for every
            patient.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-secondary-foreground/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative text-center"
              >
                <div className="relative z-10 inline-flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-primary font-bold text-sm mb-2">
                    Step {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-secondary-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-foreground/70 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
