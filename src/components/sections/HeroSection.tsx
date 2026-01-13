import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import {
  ArrowRight,
  Clock,
  Shield,
  Users,
  Activity,
  Heart,
  Award,
} from "lucide-react";
import slide1 from "@/assets/physio-01.jpg"
import slide2 from "@/assets/physio-02.jpg"
import slide3 from "@/assets/physio-03.jpg"
const heroSlides = [
  {
    id: 1,
    title: "Advanced Physiotherapy &",
    highlight: "Complete Recovery",
    titleEnd: "Care",
    description:
      "Experience world-class rehabilitation services at EH Physio & Rehabilitation Centre. Our expert team combines clinical excellence with compassionate care to restore your mobility and independence.",
    image: slide1,
    icon: Shield,
    color: "#E84D3D",
    stats: { icon: Users, value: "10,000+", label: "Successful Recoveries" },
  },
  {
    id: 2,
    title: "Strength Training &",
    highlight: "Rehabilitation",
    titleEnd: "Excellence",
    description:
      "Our state-of-the-art rehabilitation gym features modern equipment and personalized strength programs designed to help you regain power, endurance, and confidence.",
    image: slide2,
    icon: Clock,
    color: "#E84D3D",
    stats: { icon: Award, value: "15+", label: "Years of Excellence" },
  },
  {
    id: 3,
    title: "Neurological &",
    highlight: "Movement",
    titleEnd: "Therapy",
    description:
      "Specialized neurological rehabilitation programs for stroke recovery, Parkinson's, and spinal cord injuries. We help you rediscover the joy of movement.",
    image: slide3,
    icon: Activity,
    color: "#E84D3D",
    stats: { icon: Heart, value: "24/7", label: "Dedicated Support" },
  },
];

// ============================================
// FLOATING PARTICLES COMPONENT
// ============================================
const FloatingParticles = memo(({ accentColor }: { accentColor: string }) => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            backgroundColor: accentColor,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
});

FloatingParticles.displayName = "FloatingParticles";

// ============================================
// GLOW BLOBS COMPONENT
// ============================================
const GlowBlobs = memo(({ accentColor }: { accentColor: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse-slow"
        style={{ backgroundColor: accentColor }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse-slower"
        style={{ backgroundColor: accentColor }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-10 animate-drift"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
});

GlowBlobs.displayName = "GlowBlobs";

// ============================================
// STAT BADGE COMPONENT
// ============================================
const StatBadge = memo(({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) => {
  return (
    <div
      className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 animate-fadeInUp"
      style={{ animationDelay: "0.6s" }}
    >
      <span className="text-red-400">{icon}</span>
      <span className="text-white font-bold">{value}</span>
      <span className="text-white/70 text-sm">{label}</span>
    </div>
  );
});

StatBadge.displayName = "StatBadge";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const progressRef = useRef<NodeJS.Timeout>();

  const slide = heroSlides[current];

  const goToSlide = useCallback((index: number) => {
    if (index === current || isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);

    setTimeout(() => setCurrent(index), 300);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [current, isTransitioning]);

  const goToNextSlide = useCallback(() => {
    goToSlide((current + 1) % heroSlides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        goToNextSlide();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isTransitioning, goToNextSlide]);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
    }, 20);

    progressRef.current = progressTimer;
    return () => clearInterval(progressTimer);
  }, [current]);

  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
      progressRef.current && clearInterval(progressRef.current);
    };
  }, []);

  const StatIcon = slide.stats.icon;

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-slate-900 ">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${s.image})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/55 to-slate-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30" />
          </div>
        ))}
      </div>

      {/* Floating Particles & Glow Effects */}
      <FloatingParticles accentColor={slide.color} />
      <GlowBlobs accentColor={slide.color} />

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] md:min-h-screen items-center pt-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
           
            {/* Title */}
        <h1
  className="pt-4 mb-6 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight animate-fadeInUp"
  style={{ animationDelay: "0.3s" }}
  key={`title-${current}`}
>
  {slide.title} <br />
  <span
    className="inline-block bg-gradient-to-r from-[#E84D3D] to-[#da4a39] bg-clip-text text-transparent"
    style={{ textShadow: `0 0 40px ${slide.color}40` }}
  >
    {slide.highlight}
  </span>
</h1>


            {/* Description */}
            <p
              className="mb-8 text-base sm:text-lg md:text-lg text-slate-200 leading-relaxed animate-fadeInUp max-w-2xl"
              style={{ animationDelay: "0.4s" }}
              key={`desc-${current}`}
            >
              {slide.description}
            </p>

            {/* CTA & Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 animate-fadeInUp"
                style={{
                  animationDelay: "0.5s",
                  background: `linear-gradient(135deg, ${slide.color}, #c74031)`,
                  boxShadow: `0 10px 40px ${slide.color}40`,
                }}
              >
                Our Services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

             
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
  <div
    className="flex items-center gap-3 animate-fadeInUp"
    style={{ animationDelay: "0.7s" }}
  >
    {heroSlides.map((_, i) => (
      <button
        key={i}
        onClick={() => goToSlide(i)}
        className="relative h-1.5 rounded-full transition-all overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
        style={{
          width: i === current ? "48px" : "12px",
          backgroundColor:
            i === current ? slide.color : "rgba(255,255,255,0.3)",
        }}
        aria-label={`Go to slide ${i + 1}`}
      >
        {i === current && (
          <div
            className="absolute inset-0 bg-white/30 rounded-full"
            style={{ width: `${progress}%` }}
          />
        )}
      </button>
    ))}
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />

      {/* Decorative Side Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 hidden lg:block">
        <div
          className="w-full h-full rounded-full animate-pulse-height"
          style={{ backgroundColor: slide.color }}
        />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-10px, -20px);
          }
          50% {
            transform: translate(10px, 20px);
          }
          75% {
            transform: translate(10px, -10px);
          }
        }

        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, -30px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.2);
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1.1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1);
          }
        }

        @keyframes pulse-height {
          0%, 100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-drift {
          animation: drift 12s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite 2s;
        }

        .animate-pulse-height {
          animation: pulse-height 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;