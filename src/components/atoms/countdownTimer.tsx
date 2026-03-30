'use client';
import { addPlural, getRemainingTime } from '@/util';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

export function CountdownTimer({ limit }: { limit: string }) {
  const [state, setState] = useState<ReturnType<
    typeof getRemainingTime
  > | null>(null);

  useEffect(() => {
    const update = () => {
      setState(getRemainingTime(limit));
    };

    update();

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [limit]);

  const pCountdown = 'font-secondary font-semibold text-title';

  if (!state) {
    return <p className={clsx(pCountdown, 'text-2xl')}>Carregando…</p>;
  }

  if (state.expired) {
    return <p className={clsx(pCountdown, 'text-4xl')}>Chegou! ✨🏠</p>;
  }

  const { d, h, m, s } = state;
  const metrics = [
    { value: d, label: addPlural(d, 'Dia') },
    { value: h, label: addPlural(h, 'Hora') },
    { value: m, label: addPlural(m, 'Minuto') },
    { value: s, label: addPlural(s, 'Segundo') },
  ];

  return (
    <div className="flex gap-3 md:gap-8 items-center no-select">
      {metrics.map((item, i) => {
        return i === 0 && item.value === 0 ? null : (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-2">
              <p className="timer-card font-secondary text-4xl md:text-5xl text-title">
                {item.value.toString().padStart(2, '0')}
              </p>

              <p className="text-xs md:text-sm font-light text-opaque uppercase">
                {item.label}
              </p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
