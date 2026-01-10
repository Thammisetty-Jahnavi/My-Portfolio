import { 
  Code2, 
  Database, 
  Globe, 
  Brain, 
  BarChart3, 
  Cloud, 
  Lightbulb, 
  Rocket 
} from "lucide-react";

const skills = [
  { icon: Code2, name: "Python" },
  { icon: Database, name: "SQL" },
  { icon: Globe, name: "HTML & CSS" },
  { icon: Brain, name: "Machine Learning" },
  { icon: BarChart3, name: "Data Analysis" },
  { icon: Cloud, name: "SAP ABAP" },
];

const softSkills = [
  { icon: Lightbulb, name: "Self-Learning" },
  { icon: Rocket, name: "Motivation" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-lg font-medium text-accent bg-accent/10 rounded-full mb-4">
              My Skills
            </span>
          </div>

          {/* Skills Grid (grouped with icons) */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500">
              <h3 className="font-semibold text-foreground mb-4"><Code2 className="inline-block mr-2 text-accent" size={18} />Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-accent inline-block" />Python</span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-accent inline-block" />SAP ABAP</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500">
              <h3 className="font-semibold text-foreground mb-4"><Globe className="inline-block mr-2 text-accent" size={18} />Web Development</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-accent inline-block" />HTML</span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-accent inline-block" />CSS</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500">
              <h3 className="font-semibold text-foreground mb-4"><Database className="inline-block mr-2 text-accent" size={18} />Database</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-accent inline-block" />SQL</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500">
              <h3 className="font-semibold text-foreground mb-4"><Rocket className="inline-block mr-2 text-accent" size={18} />Tools</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-accent inline-block" />VS CODE</span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-accent inline-block" />FIGMA</span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-accent inline-block" />SAP GUI</span>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border hover:border-accent/30 transition-all duration-300"
              >
                <skill.icon className="text-accent" size={18} />
                <span className="font-medium text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
