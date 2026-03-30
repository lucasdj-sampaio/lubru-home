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

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const dateStr = `${day}/${month}/${year}`;
  const timeStr = `${hours}h ${minutes}m`;

  return {
    date: dateStr,
    time: timeStr,
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
