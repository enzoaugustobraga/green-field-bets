import { Link, useLocation } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Dicas de Apostas', path: '/tips' },
    { name: 'Dúvidas e Acesso', path: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        <Link to="/" className="flex items-center space-x-2 transition-smooth hover:opacity-80">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
            <Trophy className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Dicas de Apostas</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-smooth",
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <nav className="flex md:hidden items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-3 py-2 text-xs font-medium rounded-lg transition-smooth",
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {item.name.split(' ')[0]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
