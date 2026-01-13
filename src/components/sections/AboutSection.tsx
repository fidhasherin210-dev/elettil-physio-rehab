import { useState, useEffect, useRef } from "react";
import { Heart, Users, Award, Sparkles } from "lucide-react";
import physioImage from "@/assets/hero-slide-2.jpg"
// Replace with your actual image

const stats = [
  { 
    icon: Heart, 
    value: '100%', 
    label: 'Patient-Centered Care', 
    color: "from-[#E84D3D] to-[#c74031]" 
  },
  { 
    icon: Users, 
    value: '15+', 
    label: 'Expert Therapists', 
    color: "from-[#5B6B7C] to-[#4A5A6B]" 
  },
  { 
    icon: Award, 
    value: '10+', 
    label: 'Years Experience', 
    color: "from-[#E84D3D] to-[#c74031]" 
  },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-float" />
        <div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '1.5s' }} 
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <div className="w-full h-full bg-gradient-to-br from-red-500/10 via-slate-100 to-slate-200 flex items-center justify-center relative">
                
                {/* Image */}
                <img
                  src={physioImage}
                  alt="EH Physio & Rehabilitation Centre"
                  className="w-full h-full object-cover relative z-10"
                />

                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div
                    className="w-48 h-48 rounded-full border-2 border-red-400/30 animate-ping"
                    style={{ animationDuration: "3s" }}
                  />
                  <div
                    className="absolute w-64 h-64 rounded-full border-2 border-slate-400/20 animate-ping"
                    style={{ animationDuration: "4s", animationDelay: "0.5s" }}
                  />
                </div>

              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl opacity-10 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-slate-500 to-slate-600 rounded-3xl opacity-10 -z-10" />
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              About Us
              <Sparkles className="w-4 h-4" />
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-slate-900 mb-6">
              Restoring Confidence,{" "}
           <span className="text-[#E84D3D]">
  Independence & Quality of Life
</span>

            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Welcome to EH Physio & Rehab Centre, a premier destination for advanced physiotherapy and comprehensive recovery. As a proud unit of EH Mediversity LLP, we combine clinical expertise with compassionate care to help you regain mobility, strength, and independence.

            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              We offer both <strong className="text-slate-900">out-patient and in-patient rehabilitation services</strong>, supported by modern infrastructure and experienced healthcare professionals dedicated to your complete recovery.
            </p>

            {/* Stats Grid
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group p-5 rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-red-300 cursor-pointer ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-red-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;