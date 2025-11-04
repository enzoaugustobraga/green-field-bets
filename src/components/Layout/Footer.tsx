import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-card mt-auto">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Site informativo de análises e palpites esportivos
            </span>
          </div>
          <p className="text-xs text-muted-foreground max-w-2xl">
            Este site tem caráter exclusivamente informativo. Não incentivamos apostas ilegais.
            Jogue com responsabilidade. +18 anos.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dicas de Apostas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
