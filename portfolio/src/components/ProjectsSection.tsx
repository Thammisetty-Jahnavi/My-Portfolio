import { ExternalLink, Github, Stethoscope, Film, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Medical Recommendation System",
    description: "An intelligent healthcare solution that analyzes patient data, predicts symptoms, and provides accurate treatment suggestions using machine learning algorithms.",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    highlights: [
      "Patient data analysis and preprocessing",
      "Symptom prediction using ML models",
      "Personalized treatment recommendations",
      "High accuracy diagnostic suggestions"
    ],
    icon: Stethoscope,
    featured: true,
  },
  {
    title: "Movie Recommendation System",
    description: "A simple system that suggests movies to users based on their preferences and interests. Uses similarity and rating logic to help users discover new movies easily.",
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    highlights: [
      "Recommends movies based on user preferences",
      "Uses basic similarity or rating logic",
      "Helps users discover new movies easily",
      "Simple and user-friendly design"
    ],
    icon: Film,
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
              My Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Real-world applications of data science and machine learning.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative rounded-3xl border border-border bg-card overflow-hidden hover-lift"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-accent-gradient" />
                
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <project.icon className="text-accent" size={26} />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      Featured
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                View All on GitHub
                <ArrowUpRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
