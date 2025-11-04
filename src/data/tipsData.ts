export interface Match {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  tip: string;
  reason: string;
  odds?: string;
}

export const tipsData: Record<string, Match[]> = {
  betano: [
    {
      id: 'b1',
      date: '2025-11-05',
      time: '16:00',
      homeTeam: 'Flamengo',
      awayTeam: 'Palmeiras',
      league: 'Brasileirão Série A',
      tip: 'Ambas equipes marcam',
      reason: 'Ambos times têm forte poder ofensivo e vêm marcando em todos os jogos recentes.',
      odds: '1.85',
    },
    {
      id: 'b2',
      date: '2025-11-05',
      time: '18:30',
      homeTeam: 'São Paulo',
      awayTeam: 'Corinthians',
      league: 'Brasileirão Série A',
      tip: 'Mais de 2.5 gols',
      reason: 'Derby paulista historicamente movimentado, com média de 3 gols nos últimos confrontos.',
      odds: '2.10',
    },
    {
      id: 'b3',
      date: '2025-11-06',
      time: '20:00',
      homeTeam: 'Atlético-MG',
      awayTeam: 'Grêmio',
      league: 'Brasileirão Série A',
      tip: 'Vitória Atlético-MG',
      reason: 'Atlético joga em casa com retrospecto positivo e está em melhor fase.',
      odds: '1.95',
    },
  ],
  bet365: [
    {
      id: 'bt1',
      date: '2025-11-05',
      time: '17:00',
      homeTeam: 'Manchester City',
      awayTeam: 'Liverpool',
      league: 'Premier League',
      tip: 'Mais de 2.5 gols',
      reason: 'Confronto direto entre os times mais ofensivos da Premier League. Alta expectativa de gols.',
      odds: '1.75',
    },
    {
      id: 'bt2',
      date: '2025-11-05',
      time: '19:45',
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      league: 'La Liga',
      tip: 'Ambas equipes marcam',
      reason: 'El Clásico sempre movimentado, defesas vulneráveis em clássicos.',
      odds: '1.90',
    },
    {
      id: 'bt3',
      date: '2025-11-06',
      time: '16:30',
      homeTeam: 'Inter Milan',
      awayTeam: 'Juventus',
      league: 'Serie A',
      tip: 'Menos de 2.5 gols',
      reason: 'Derby defensivo italiano, ambos priorizam não sofrer gols.',
      odds: '1.80',
    },
  ],
  sportingbet: [
    {
      id: 's1',
      date: '2025-11-05',
      time: '15:00',
      homeTeam: 'PSG',
      awayTeam: 'Lyon',
      league: 'Ligue 1',
      tip: 'Vitória PSG',
      reason: 'PSG domina em casa e tem elenco muito superior ao adversário.',
      odds: '1.50',
    },
    {
      id: 's2',
      date: '2025-11-05',
      time: '17:30',
      homeTeam: 'Bayern Munich',
      awayTeam: 'Borussia Dortmund',
      league: 'Bundesliga',
      tip: 'Mais de 3.5 gols',
      reason: 'Der Klassiker sempre com muitos gols, ambos atacam intensamente.',
      odds: '2.25',
    },
    {
      id: 's3',
      date: '2025-11-06',
      time: '21:00',
      homeTeam: 'Chelsea',
      awayTeam: 'Arsenal',
      league: 'Premier League',
      tip: 'Ambas equipes marcam',
      reason: 'Derby londrino equilibrado, ambos marcam com frequência neste confronto.',
      odds: '1.85',
    },
  ],
};
