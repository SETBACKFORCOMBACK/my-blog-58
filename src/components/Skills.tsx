import { Code2, Database, Cpu, Globe, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: "Python",
      description: "Advanced programming with focus on AI and automation"
    },
    {
      icon: Cpu,
      title: "C Programming",
      description: "System-level programming and algorithm implementation"
    },
    {
      icon: Globe,
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript and modern frameworks"
    },
    {
      icon: Database,
      title: "Databases",
      description: "Database design, management and optimization"
    },
    {
      icon: Lightbulb,
      title: "AI Enthusiasm",
      description: "Machine learning, AI applications and emerging technologies"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Building and nurturing tech communities and networks"
    }
  ];

  return (
    <section className="py-20" id="skills">
      <div className="container-portfolio">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className="portfolio-card text-center hover:scale-105 group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;