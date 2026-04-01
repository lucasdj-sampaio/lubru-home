export const addPlural = (value: number, word: string) =>
  `${word}${value === 1 ? '' : 's'}`;

export function getRemainingTime(
  dateStr: string,
  alternativeText = 'agora',
): {
  raw: number;
  d: number;
  h: number;
  m: number;
  s: number;
  text: string;
  expired: boolean;
} {
  const target = new Date(
    new Date(dateStr).toLocaleString('en-US', {
      timeZone: 'America/Sao_Paulo',
    }),
  ).getTime();

  const now = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }),
  ).getTime();

  const diff = target - now;

  if (diff <= 0) {
    return {
      raw: 0,
      d: 0,
      h: 0,
      m: 0,
      s: 0,
      text: alternativeText,
      expired: true,
    };
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  let text = '';

  if (d > 0) text = `${d} ${addPlural(d, 'dia')}`;
  else if (h > 0) text = `${h} ${addPlural(h, 'hora')}`;
  else if (m > 0) text = `${m} ${addPlural(m, 'minuto')}`;
  else text = `${s} ${addPlural(s, 'segundo')}`;

  return { raw: diff, d, h, m, s, text, expired: false };
}

export function splitDateTime(timestamp: string) {
  const date = new Date(timestamp);

  const formatterDate = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const formatterTime = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const [day, month, year] = formatterDate.format(date).split('/');
  const [hours, minutes] = formatterTime.format(date).split(':');

  return {
    date: `${day}/${month}/${year}`,
    time: `${hours}h ${minutes}m`,
  };
}

export function truncateText(text: string, maxLength = 50): string {
  if (!text) return '';

  return text.length > maxLength ? text.slice(0, maxLength - 3) + '...' : text;
}

export function formatBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
