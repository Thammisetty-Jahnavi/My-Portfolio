import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 lg:px-12 pt-24 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight animate-fade-in-delay-1 whitespace-nowrap">
            <span className="text-name">Thammisetty Jahnavi</span>
          </h1>
          

          
          <p className="mt-4 text-lg sm:text-xl text-center text-muted-foreground font-medium animate-fade-in-delay-2">
            Aspiring Software Engineer — Data & AI Enthusiast
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fade-in-delay-3">
            <Button variant="hero" size="lg" asChild>
              <a href="/THAMMISETTYJAHNAVI_RESUME.pdf" download="THAMMISETTYJAHNAVI_RESUME.pdf" rel="noopener noreferrer">
                Download Resume
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">
                <Mail size={18} />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social links removed — contact & profiles are listed in resume */}

          {/* Scroll indicator removed per request */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
