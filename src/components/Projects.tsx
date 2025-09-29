import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AI Community Platform",
      description: "A web platform for AI enthusiasts to share knowledge, collaborate on projects, and build connections. Built with modern web technologies and focused on user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Python"],
      githubUrl: "#",
      liveUrl: "#",
      status: "In Development"
    },
    {
      title: "Python Automation Tools",
      description: "Collection of Python scripts and tools for automating everyday tasks, data processing, and system administration. Includes web scraping and API integration.",
      technologies: ["Python", "Selenium", "APIs", "Data Analysis"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Responsive Portfolio Website",
      description: "Modern, responsive portfolio website showcasing web development skills. Features smooth animations, clean design, and optimal performance.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Database Management System",
      description: "Custom database solution for small businesses with user-friendly interface, data visualization, and reporting features. Focus on efficiency and scalability.",
      technologies: ["SQL", "Database Design", "Data Modeling"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Planned"
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
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  {project.status === 'Completed' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
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