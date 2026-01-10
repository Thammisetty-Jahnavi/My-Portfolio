import { Award } from "lucide-react";

const certifications = [
  { title: "AWS Cloud Foundations", issuer: "Amazon Web Services" },
  { title: "Web Designing (Figma)", issuer: "GUVI" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              <span className="inline-block px-5 py-2 text-lg md:text-2xl font-semibold text-accent bg-accent/10 rounded-full">Certifications</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Award className="text-accent" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
