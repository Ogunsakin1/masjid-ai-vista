import { Link } from 'react-router-dom';
import { Users, Heart, HandCoins, Calendar, UserCheck, BookOpen } from 'lucide-react';

const features = [
  {
    title: 'Membership Management',
    description: 'Streamline member registration, profiles, and communication with powerful administrative tools.',
    icon: Users,
  },
  {
    title: 'Donations & Sadaqah',
    description: 'Accept and track donations seamlessly with transparent reporting and campaign management.',
    icon: Heart,
  },
  {
    title: 'Zakat Management',
    description: 'Calculate, collect, and distribute Zakat efficiently with automated tracking and compliance.',
    icon: HandCoins,
  },
  {
    title: 'Events & Lectures',
    description: 'Organize community events, lectures, and programs with easy scheduling and attendance tracking.',
    icon: Calendar,
  },
  {
    title: 'Volunteer Management',
    description: 'Coordinate volunteers, assign roles, and track contributions to maximize community impact.',
    icon: UserCheck,
  },
  {
    title: 'Islamic Learning',
    description: 'Provide access to courses, resources, and educational content for all age groups.',
    icon: BookOpen,
  },
];

const HomePage = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,215,0,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 0%, transparent 50%)' }} />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Masjid360 AI
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-10 font-medium leading-relaxed">
            Empowering Mosques and Islamic Organizations through Digital Innovation.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/dashboard"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-accent hover:text-foreground"
            >
              <span>Get Started</span>
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/#features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything You Need to Manage Your Organization
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive suite of tools designed specifically for mosques and Islamic organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Masjid360 AI
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Masjid360 AI is a modern, all-in-one management platform built specifically for mosques,
              Islamic centers, schools, and dawah organizations. Our mission is to empower communities
              with digital tools that streamline operations, enhance engagement, and foster growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Members Managed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to transform your organization? Contact us to learn more about Masjid360 AI.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary/90"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
