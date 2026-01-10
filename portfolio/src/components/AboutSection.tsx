import { Code2, Database, Brain, TrendingUp } from "lucide-react";

const stats = [
  { value: "3+", label: "Projects Completed" },
  { value: "5+", label: "Technologies" },
  { value: "2+", label: "Certifications" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Passionate About Building
              <br />
              <span className="text-gradient">Data-Driven Solutions</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a B.Tech Computer Science student specializing in <span className="text-foreground font-medium">Data Science</span>, 
                with a strong passion for transforming raw data into actionable insights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech has equipped me with skills in <span className="text-foreground font-medium">Python, SQL, and Machine Learning</span>. 
                I thrive on solving real-world problems through data-driven solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently seeking opportunities to apply my skills in a professional 
                environment while continuing to expand my knowledge in AI and cloud technologies.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border mt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, title: "Python Developer", desc: "Clean, efficient code" },
                { icon: Database, title: "SQL Expert", desc: "Data management" },
                { icon: Brain, title: "ML Enthusiast", desc: "Predictive modeling" },
                { icon: TrendingUp, title: "Data Analyst", desc: "Insights & trends" },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-3xl bg-card border border-border hover:border-accent/50 hover-lift cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
