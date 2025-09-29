import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      title: "Build Your Own Responsive Website",
      issuer: "NxtWave CCBP Academy",
      description: "Comprehensive course covering responsive web design principles, mobile-first approach, and modern CSS techniques.",
      skills: ["Responsive Design", "CSS", "HTML", "Mobile-First"],
      badgeColor: "bg-blue-500"
    },
    {
      title: "Build Your Own Static Website",
      issuer: "NxtWave CCBP Academy", 
      description: "Fundamentals of web development including HTML structure, CSS styling, and creating static websites from scratch.",
      skills: ["HTML", "CSS", "Web Development", "Static Sites"],
      badgeColor: "bg-green-500"
    },
    {
      title: "Introduction to Databases",
      issuer: "NxtWave CCBP Academy",
      description: "Database fundamentals, SQL queries, data modeling, and database management concepts for web applications.",
      skills: ["SQL", "Database Design", "Data Modeling", "RDBMS"],
      badgeColor: "bg-purple-500"
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
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
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