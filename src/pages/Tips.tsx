import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import PasswordGuard from '@/components/PasswordGuard';
import TipsTable from '@/components/TipsTable';
import { tipsData } from '@/data/tipsData';

const Tips = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [key, setKey] = useState(0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-8rem)] py-8">
        <div className="container px-4 mx-auto max-w-7xl">
          <PasswordGuard onSuccess={() => setKey(prev => prev + 1)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8" key={key}>
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Dicas de Apostas
              </h1>
              <p className="text-muted-foreground">
                Selecione a casa de apostas para ver as dicas do dia
              </p>
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>

          <Tabs defaultValue="betano" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
              <TabsTrigger value="betano" className="text-sm md:text-base">
                Betano
              </TabsTrigger>
              <TabsTrigger value="bet365" className="text-sm md:text-base">
                Bet365
              </TabsTrigger>
              <TabsTrigger value="sportingbet" className="text-sm md:text-base">
                Sportingbet
              </TabsTrigger>
            </TabsList>

            <TabsContent value="betano" className="mt-6">
              <TipsTable matches={tipsData.betano} />
            </TabsContent>

            <TabsContent value="bet365" className="mt-6">
              <TipsTable matches={tipsData.bet365} />
            </TabsContent>

            <TabsContent value="sportingbet" className="mt-6">
              <TipsTable matches={tipsData.sportingbet} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Tips;
