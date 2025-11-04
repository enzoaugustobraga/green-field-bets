import { useState } from 'react';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

interface PasswordGuardProps {
  onSuccess?: () => void;
}

const PasswordGuard = ({ onSuccess }: PasswordGuardProps) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const success = login(password);
      
      if (success) {
        toast({
          title: 'Acesso liberado!',
          description: 'Bem-vindo à área de dicas.',
        });
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast({
          title: 'Senha incorreta',
          description: 'Por favor, tente novamente.',
          variant: 'destructive',
        });
        setPassword('');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Área Restrita</h2>
          <p className="text-muted-foreground">
            Digite a senha para acessar as dicas de apostas
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Digite a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 text-center text-lg"
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            className="w-full h-12 text-lg font-semibold"
            disabled={isLoading || !password}
          >
            {isLoading ? 'Verificando...' : 'Acessar Dicas'}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Não tem acesso?{' '}
            <a href="/faq" className="font-medium text-primary hover:underline">
              Saiba como assinar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordGuard;
