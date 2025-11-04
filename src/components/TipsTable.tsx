import { useState } from 'react';
import { Calendar, Clock, Trophy, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Match } from '@/data/tipsData';

interface TipsTableProps {
  matches: Match[];
}

const TipsTable = ({ matches }: TipsTableProps) => {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => (
          <Card key={match.id} className="p-4 shadow-card hover:shadow-hover transition-smooth">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(match.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{match.time}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs font-medium text-muted-foreground truncate">
                  {match.league}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-center">
                  <p className="font-semibold text-foreground">{match.homeTeam}</p>
                  <p className="text-xs text-muted-foreground my-1">vs</p>
                  <p className="font-semibold text-foreground">{match.awayTeam}</p>
                </div>
              </div>

              {match.odds && (
                <div className="text-center">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    Odd: {match.odds}
                  </span>
                </div>
              )}

              <Button
                onClick={() => setSelectedMatch(match)}
                className="w-full"
                variant="default"
              >
                Ver Dica
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedMatch} onOpenChange={() => setSelectedMatch(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-primary" />
              <span>Dica de Aposta</span>
            </DialogTitle>
            <DialogDescription>
              {selectedMatch && (
                <div className="space-y-2 text-left mt-4">
                  <div className="font-semibold text-foreground text-base">
                    {selectedMatch.homeTeam} vs {selectedMatch.awayTeam}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {selectedMatch.league} • {formatDate(selectedMatch.date)} às {selectedMatch.time}
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          {selectedMatch && (
            <div className="space-y-4 mt-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm font-medium text-muted-foreground mb-1">Aposta Recomendada:</p>
                <p className="text-lg font-bold text-primary">{selectedMatch.tip}</p>
                {selectedMatch.odds && (
                  <p className="text-sm text-muted-foreground mt-1">Odd: {selectedMatch.odds}</p>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Justificativa:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedMatch.reason}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TipsTable;
