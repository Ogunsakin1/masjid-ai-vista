import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold">Masjid360 AI</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering mosques and Islamic organizations with modern digital management tools.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-white/60 hover:text-white transition-colors text-sm">Home</Link>
              <Link to="/#features" className="text-white/60 hover:text-white transition-colors text-sm">Features</Link>
              <Link to="/#about" className="text-white/60 hover:text-white transition-colors text-sm">About</Link>
              <Link to="/#contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/dashboard" className="text-white/60 hover:text-white transition-colors text-sm">Dashboard</Link>
              <Link to="/dashboard/members" className="text-white/60 hover:text-white transition-colors text-sm">Members</Link>
              <Link to="/dashboard/donations" className="text-white/60 hover:text-white transition-colors text-sm">Donations</Link>
              <Link to="/dashboard/events" className="text-white/60 hover:text-white transition-colors text-sm">Events</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">&copy; 2024 Masjid360 AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
