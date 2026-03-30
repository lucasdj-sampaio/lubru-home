import { fetchStrapi } from '@/app/api/strapi';
import { EventContent } from '@/shared/types/eventContent';
import { Jokes } from '@/shared/types/jokes/jokes';
import { splitDateTime } from '@/util';
import clsx from 'clsx';
import {
  BookOpenText,
  CalendarDays,
  CircleCheckBig,
  CircleX,
  Clock,
  Gamepad2,
  MapPin,
  Plane,
  PlaneLanding,
} from 'lucide-react';
import { EventCard } from '../atoms/eventCard';
import { HrIcon } from '../atoms/hrIcon';
import { ItemCardList } from '../molecules/itemCardList';

export default async function AboutEvent({ event }: { event: EventContent }) {
  const json = await fetchStrapi('joke?populate[Activitie][populate]=*', {
    revalidate: 7200,
  });
  const jokes = Jokes.fromJson(json);

  const { date, time } = splitDateTime(event.date);

  const divider = 'border-t border-dashed border-regular/30 pt-6 mt-8';
  const divIncludClass =
    'flex flex-col gap-2 [&>div]:flex [&>div]:items-center [&>div]:gap-2';
  const spanTitleClass =
    'font-secondary text-primary font-medium text-sm md:text-md';

  const cards = [
    {
      icon: <CalendarDays size={24} />,
      label: 'Data',
      data: date,
    },
    {
      icon: <Clock size={24} />,
      label: 'Horário',
      data: time,
    },
    {
      icon: <MapPin size={24} />,
      label: 'Local',
      data: event.address,
    },
  ];

  return (
    <div id="roadmap" className="flex flex-col gap-8">
      <div className="section-title">
        <HrIcon icon={<BookOpenText size={16} />} />
        <h2>Roteiro de Viagem</h2>
        <h1>Sobre o Evento</h1>
        <hr className="section-hr" />
      </div>

      <p className="max-w-lg mx-auto text-center text-regular leading-relaxed">
        Estamos começando uma nova fase juntos e nada melhor do que celebrar com
        as pessoas que amamos!
      </p>

      <div
        className={clsx(
          'max-w-3xl mx-auto rounded-lg border border-regular/30',
          'bg-item-background/80 overflow-hidden',
        )}
      >
        <div
          className={clsx(
            'flex items-center justify-between',
            'bg-primary px-4 md:px-6 py-3 [&_p]:text-xs',
          )}
        >
          <div className="flex items-center gap-2">
            <Plane size={16} className="text-secondary" />
            <p className="tracking-widest text-title font-secondary">
              BOARDING PASS
            </p>
          </div>
          <p className="text-opaque">CASA NOVA 2026</p>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3">
            {cards.map((item, index) => {
              const isLast = index === cards.length - 1;
              const isOdd = cards.length % 2 !== 0;

              return (
                <div
                  key={index}
                  className={clsx(
                    isLast &&
                      isOdd &&
                      'col-span-2 flex justify-center md:col-span-1 md:flex-none md:justify-start',
                  )}
                >
                  <EventCard key={index} {...item} />
                </div>
              );
            })}
          </div>

          <div className={`${divider} grid md:grid-cols-2 gap-6 text-sm`}>
            <div className={divIncludClass}>
              <div>
                <CircleCheckBig size={16} className="text-green-600" />
                <span className={spanTitleClass}>INCLUSO</span>
              </div>
              <p className="text-regular">{event.included}</p>
            </div>

            <div className={divIncludClass}>
              <div>
                <CircleX size={16} className="text-red-600" />
                <span className={spanTitleClass}>NÃO INCLUSO</span>
              </div>
              <p className="text-regular">{event.nonIncluded}</p>
            </div>
          </div>

          <div className={divider}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Gamepad2 size={16} className="text-secondary" />
              <span className={spanTitleClass}>ENTRETENIMENTO A BORDO</span>
            </div>

            <ItemCardList items={jokes.toJson()} />
          </div>

          <div
            className={clsx(
              divider,
              'flex items-center justify-center',
              'gap-2 text-xs text-muted-foreground text-regular',
            )}
          >
            <MapPin size={12} />
            <p>DESTINO: NOSSO NOVO LAR</p>
            <PlaneLanding size={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
