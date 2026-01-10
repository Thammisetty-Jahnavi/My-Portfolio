import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="text-xl font-bold">
            <span className="text-gradient">Jahnavi</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {currentYear} Thammisetty Jahnavi · Made with{" "}
            <Heart size={14} className="text-accent fill-accent" /> in India
          </p>

          {/* Back to Top */}
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
