import { ThemeProvider } from "./components/theme-provider";
import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import TeamShowcase from "./components/ui/team-showcase";
import { Testimonials } from "./components/testimonials";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="landing-theme">
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [scroll-snap-type:y_mandatory] [scroll-behavior:smooth]">
        <Navigation />
        
        {/* Hero Section */}
        <section id="home" className="h-screen w-full snap-start snap-always [scroll-snap-stop:always] flex items-center justify-center">
          <Hero />
        </section>
        
        {/* Team Section */}
        <section id="team" className="h-screen w-full snap-start snap-always [scroll-snap-stop:always] flex items-center justify-center bg-muted/20 px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto px-4">
                Talented individuals working together to create amazing experiences
              </p>
            </div>
            <TeamShowcase />
          </div>
        </section>

        {/* About Section - Placeholder */}
        <section id="about" className="h-screen w-full snap-start snap-always [scroll-snap-stop:always] flex items-center justify-center px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-3xl mx-auto leading-relaxed px-4">
              We are a team of passionate creators dedicated to building exceptional digital experiences. 
              Our mission is to transform ideas into reality through innovative design and cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="h-screen w-full snap-start snap-always [scroll-snap-stop:always] flex items-center justify-center bg-muted/20">
          <Testimonials />
        </section>

        {/* Contact Section - Placeholder */}
        <section id="contact" className="h-screen w-full snap-start snap-always [scroll-snap-stop:always] flex items-center justify-center px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-8 px-4">
              Ready to start your next project? Let's create something amazing together.
            </p>
            <button className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all duration-200 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}