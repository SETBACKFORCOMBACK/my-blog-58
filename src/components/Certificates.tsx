import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      title: "Model Context Protocol (MCP) Mega Workshop",
      issuer: "NxtWave CCBP 4.0 Academy",
      description: "Hands-on experience integrating AI with real-world tools using Cursor IDE, Pipedream.mcp, and MCP Servers. Built prompt-driven AI workflows and enhanced skills in AI automation and workflow design.",
      skills: ["AI Integration", "MCP", "Cursor IDE", "Workflow Automation"],
      badgeColor: "bg-indigo-500",
      link: "https://lnkd.in/dWfaghJ7"
    },
    {
      title: "C Programming Masterclass",
      issuer: "Udemy",
      description: "Comprehensive C programming course covering fundamentals, data structures, memory management, and advanced programming concepts.",
      skills: ["C Programming", "Data Structures", "Memory Management", "Algorithms"],
      badgeColor: "bg-orange-500",
      link: "https://ude.my/UC-028ee538-a92e-48e5-a7ea-37e71282efc8"
    },
    {
      title: "Build Your Own Responsive Website",
      issuer: "NxtWave CCBP Academy",
      description: "Comprehensive course covering responsive web design principles, mobile-first approach, and modern CSS techniques.",
      skills: ["Responsive Design", "CSS", "HTML", "Mobile-First"],
      badgeColor: "bg-blue-500",
      link: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=WVOBGQBZYF"
    },
    {
      title: "Build Your Own Static Website",
      issuer: "NxtWave CCBP Academy", 
      description: "Fundamentals of web development including HTML structure, CSS styling, and creating static websites from scratch.",
      skills: ["HTML", "CSS", "Web Development", "Static Sites"],
      badgeColor: "bg-green-500",
      link: "https://lnkd.in/dWfaghJ7"
    },
    {
      title: "Introduction to Databases",
      issuer: "NxtWave CCBP Academy",
      description: "Database fundamentals, SQL queries, data modeling, and database management concepts for web applications.",
      skills: ["SQL", "Database Design", "Data Modeling", "RDBMS"],
      badgeColor: "bg-purple-500",
      link: "https://certificates.ccbp.in/academy/introduction-to-databases?id=EJKDZPLXOC"
    }
  ];

  return (
    <section className="py-20" id="certificates">
      <div className="container-portfolio">
        <h2 className="section-title text-center">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="portfolio-card text-center hover:scale-105 group">
              {/* Certificate Badge */}
              <div className="mb-6 flex justify-center">
                <div className={`p-4 ${cert.badgeColor} rounded-full`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Certificate Info */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              
              <p className="text-blue-600 font-medium mb-3">
                {cert.issuer}
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {cert.description}
              </p>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="skill-tag text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* View Certificate Button */}
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2 mx-auto"
                asChild
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More certifications and learning achievements coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;