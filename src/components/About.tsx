const About = () => {
  return (
    <section className="py-20 bg-secondary/30" id="about">
      <div className="container-portfolio">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">About Me</h2>
          
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I am a <strong className="text-foreground">Fellow at NxtWave's CCBP Academy</strong> and a student at <strong className="text-foreground">Kalasalingam University</strong>.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Passionate about <strong className="text-blue-600">AI, Python, C, and Web Development</strong>. 
                I believe in building communities and leveraging technology for impact.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey in technology is driven by curiosity and a desire to create meaningful solutions 
                that can make a difference in people's lives. I'm constantly learning and exploring new 
                technologies to stay at the forefront of innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;