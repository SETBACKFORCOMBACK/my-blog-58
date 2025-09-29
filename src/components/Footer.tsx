const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border" role="contentinfo">
      <div className="container-portfolio py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">Imran Sheik</h2>
            <p className="text-sm text-muted-foreground">
              AI Enthusiast & Frontend Developer passionate about building innovative solutions and communities.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">About</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Skills</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Projects</a></li>
              <li><a href="#certificates" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Certificates</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/imran-sheik" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded" aria-label="Connect on LinkedIn">
                <span className="sr-only">LinkedIn</span>
                LinkedIn
              </a>
              <a href="mailto:imranartisan@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded" aria-label="Send Email">
                <span className="sr-only">Email</span>
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Imran Sheik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;