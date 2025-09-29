import { Button } from '@/components/ui/button';
import imranProfile from '@/assets/imran-profile.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30" id="hero">
      <div className="container-portfolio py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src={imranProfile} 
                alt="Imran Sheik - AI Enthusiast & Frontend Developer"
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="hero-title mb-6">
              Imran Sheik
            </h1>
            <p className="text-2xl font-semibold text-blue-600 mb-4">
              AI Enthusiast & Frontend Developer
            </p>
            <p className="hero-subtitle mb-8 max-w-2xl">
              Python | C | Web Development | Community Builder in AI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToProjects}
                className="portfolio-btn-primary text-lg px-8 py-4"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                className="portfolio-btn-secondary text-lg px-8 py-4"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;