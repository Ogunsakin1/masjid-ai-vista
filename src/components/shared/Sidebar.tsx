import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu, Home, Users, DollarSign, Calendar, BookOpen, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/members', label: 'Members', icon: Users },
  { href: '/dashboard/donations', label: 'Donations', icon: DollarSign },
  { href: '/dashboard/events', label: 'Events', icon: Calendar },
  { href: '/dashboard/education', label: 'Education', icon: BookOpen },
];

const SidebarContent = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <Link to="/" className="text-2xl font-bold text-primary-foreground">
          Masjid360 AI
        </Link>
      </div>
      <nav className="flex-grow px-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={cn(
              'flex items-center px-4 py-2 my-1 rounded-lg transition-colors',
              pathname === link.href
                ? 'bg-primary-foreground text-primary'
                : 'hover:bg-white/10 text-primary-foreground'
            )}
          >
            <link.icon className="mr-3 h-5 w-5" />
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 mt-auto">
        <Link
          to="/"
          className="flex items-center px-4 py-2 rounded-lg transition-colors text-primary-foreground hover:bg-white/10"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Link>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:flex md:flex-col md:w-64 bg-primary text-primary-foreground">
        <SidebarContent />
      </div>
      <div className="md:hidden p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-primary text-primary-foreground p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;
