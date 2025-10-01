import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Adin Fabrication Calculator",
      description: "Professional web application for fabrication cost calculations. Built for Adin company to streamline their fabrication estimation process with an intuitive interface.",
      technologies: ["Web Development", "JavaScript", "Calculator Logic", "UI/UX"],
      githubUrl: "https://github.com/SETBACKFORCOMBACK/adinn.git",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Symptom Buddy",
      description: "Healthcare web application for patient symptom detection and analysis. Helps users identify potential health issues based on their symptoms with an easy-to-use interface.",
      technologies: ["React", "Healthcare Tech", "Lovable", "Symptom Analysis"],
      githubUrl: "https://github.com/SETBACKFORCOMBACK/lovable-symptom-buddy.git",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "7-Day Python Challenge Series",
      description: "Complete series of Python projects: Calculator, Number Guessing Game, To-Do List, Notes Saver, Bank Account Simulator (OOP), Student Grade Manager, and AI Chatbot with Gemini API.",
      technologies: ["Python", "OOP", "AI Integration", "Gemini API"],
      githubUrl: "https://github.com/SETBACKFORCOMBACK",
      liveUrl: "#",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30" id="projects">
      <div className="container-portfolio">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card hover:scale-[1.02] group">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                    project.status === 'In Development' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                    'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {project.status === 'Completed' && project.liveUrl !== '#' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;