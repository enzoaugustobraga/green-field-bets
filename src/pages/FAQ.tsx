import { useState } from 'react';
import { HelpCircle, Lock, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import PasswordGuard from '@/components/PasswordGuard';
import { useAuth } from '@/contexts/AuthContext';

const FAQ = () => {
  const { isAuthenticated } = useAuth();
  const [showPasswordGuard, setShowPasswordGuard] = useState(false);

  const faqs = [
    {
      question: 'Como funciona o serviço de dicas?',
      answer: 'Nosso serviço oferece análises diárias de jogos de futebol com palpites para as principais casas de apostas. Cada dica inclui a aposta recomendada, odds e justificativa baseada em análise técnica.',
    },
    {
      question: 'Como faço para acessar as dicas?',
      answer: 'Para acessar as dicas, você precisa de uma senha exclusiva de assinante. Entre em contato via WhatsApp para saber mais sobre os planos disponíveis e receber sua senha de acesso.',
    },
    {
      question: 'As dicas são atualizadas diariamente?',
      answer: 'Sim! Atualizamos nossas dicas todos os dias com os melhores jogos e análises do futebol nacional e internacional.',
    },
    {
      question: 'Quais casas de apostas são cobertas?',
      answer: 'Oferecemos dicas específicas para Betano, Bet365 e Sportingbet, as principais casas de apostas do mercado brasileiro.',
    },
    {
      question: 'Vocês garantem lucro?',
      answer: 'Não garantimos lucro. Apostas esportivas envolvem risco e nossas dicas são baseadas em análises profissionais, mas o resultado depende de diversos fatores. Jogue com responsabilidade.',
    },
  ];

  const whatsappNumber = '5544997186338';
  const whatsappMessage = 'Olá! Quero saber mais sobre as dicas de apostas.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Dúvidas e Acesso
            </h1>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas e saiba como acessar nossas dicas
            </p>
          </div>

          {/* Access Card */}
          {!showPasswordGuard ? (
            <Card className="p-6 md:p-8 shadow-card">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                  <Lock className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">
                    Já é assinante?
                  </h2>
                  <p className="text-muted-foreground">
                    Clique no botão abaixo para acessar suas dicas
                  </p>
                </div>
                <button
                  onClick={() => setShowPasswordGuard(true)}
                  className="px-6 py-3 font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-smooth"
                >
                  Acessar Área de Dicas
                </button>
              </div>
            </Card>
          ) : (
            <Card className="p-6 md:p-8 shadow-card">
              <PasswordGuard />
            </Card>
          )}

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground text-center">
              Perguntas Frequentes
            </h2>
            <Card className="p-6 shadow-card">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>

          {/* Contact Card */}
          <Card className="p-6 md:p-8 shadow-hover bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366]/10">
                <MessageCircle className="w-7 h-7 text-[#25D366]" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Quer Assinar Nosso Plano?
                </h2>
                <p className="text-muted-foreground">
                  Entre em contato via WhatsApp e saiba mais sobre como receber
                  dicas exclusivas todos os dias
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 font-semibold text-white bg-[#25D366] rounded-lg hover:bg-[#25D366]/90 transition-smooth"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
