import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science (Data Science)",
    institution: "Srinivasa Ramanujan Institute of Technology",
    period: "2021 - Present",
    current: true,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Board of Intermediate Education",
    period: "2019 - 2021",
    current: false,
  },
  {
    degree: "Secondary School Certificate",
    institution: "Board of Secondary Education",
    period: "2018 - 2019",
    current: false,
  },
];


const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Education
            </h2>
          </div>

          <div className="space-y-4">
            {education.map((item, index) => (
              <div
                key={item.degree}
                className="group relative p-6 rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 mb-4"
              >
                {item.current && (
                  <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                    Current
                  </span>
                )}
                <h4 className="font-semibold text-foreground mb-1">{item.degree}</h4>
                <p className="text-sm text-accent mb-2">{item.institution}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  {item.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
