import { Link } from 'react-router-dom';
import { Trophy, Target, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Target,
      title: 'Análises Detalhadas',
      description: 'Palpites baseados em estatísticas e análise profunda dos times',
    },
    {
      icon: TrendingUp,
      title: 'Alta Assertividade',
      description: 'Foco em apostas com bom valor e probabilidade real de acerto',
    },
    {
      icon: Shield,
      title: 'Gestão de Banca',
      description: 'Dicas para apostas responsáveis e gerenciamento de capital',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 field-pattern" />
        <div className="container relative px-4 py-20 mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary shadow-hover">
              <Trophy className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Dicas Profissionais de
                <span className="text-primary"> Apostas em Futebol</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Análises detalhadas e palpites esportivos para as principais casas de apostas.
                Apostas inteligentes começam com informação de qualidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg h-12 px-8">
                <Link to="/tips">
                  Acessar Dicas
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg h-12 px-8">
                <Link to="/faq">
                  Como Funciona
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por Que Escolher Nossas Dicas?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos análises profissionais para você fazer apostas mais inteligentes
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <Card className="p-8 md:p-12 shadow-hover bg-gradient-to-br from-card to-card/50">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Pronto para Começar?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Acesse nossa área exclusiva de dicas e receba análises profissionais
                para as principais casas de apostas do mercado.
              </p>
              <Button asChild size="lg" className="text-lg h-12 px-8">
                <Link to="/tips">
                  Acessar Área de Dicas
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
