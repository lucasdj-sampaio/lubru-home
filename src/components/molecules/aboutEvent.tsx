import { EventContent } from '@/shared/types/eventContent';
import { splitDateTime } from '@/util';
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

export default async function AboutEvent({ event }: { event: EventContent }) {
  const formatedDate = splitDateTime(event.date);

  return (
    <div id="roadmap" className="flex flex-col gap-8">
      <div className="section-title">
        <HrIcon icon={<BookOpenText size={16} />} />
        <h2>Roteiro de Viagem</h2>

        <h1>Sobre o Evento</h1>

        <hr className="section-hr" />
      </div>

      <p className="max-w-lg mx-auto leading-relaxed text-center text-regular">
        Estamos começando uma nova fase juntos e nada melhor do que celebrar com
        as pessoas que amamos!
      </p>

      <div className="bg-item-background/80 border border-regular/30 rounded-lg overflow-hidden max-w-3xl mx-auto">
        <div className="bg-primary px-6 py-3 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Plane size={16} className="text-secondary" />
            <p className="font-seconadary text-xs tracking-widest text-title">
              BOARDING PASS
            </p>
          </div>

          <p className="text-opaque">CASA NOVA 2026</p>
        </div>
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <EventCard
              icon={<CalendarDays size={24} />}
              label="Data"
              data={formatedDate.date}
            />

            <EventCard
              icon={<Clock size={24} />}
              label="Horário"
              data={formatedDate.time}
            />

            <EventCard
              icon={<MapPin size={24} />}
              label="Local"
              data={event.address}
            />
          </div>

          <div className="mt-8 pt-6 border-t border-dashed border-regular/30 grid md:grid-cols-2 gap-6 text-sm">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <CircleCheckBig size={16} className="text-green-600" />
                <span className="font-secondary text-primary font-medium">
                  INCLUSO
                </span>
              </div>

              <p className="text-regular">{event.included}</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <CircleX size={16} className="text-red-600" />
                <span className="font-secondary text-primary font-medium">
                  NÃO INCLUSO
                </span>
              </div>

              <p className="text-regular">{event.nonIncluded}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-dashed border-regular/30">
            <div className="flex gap-2 items-center justify-center">
              <Gamepad2 size={16} className="text-secondary" />
              <span className="font-secondary text-primary font-medium">
                ENTRETENIMENTO A BORDO
              </span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-dashed border-regular/30 flex items-center justify-center gap-2 text-muted-foreground text-regular">
            <MapPin size={12} />
            <p className="text-xs">DESTINO: NOSSO NOVO LAR</p>
            <PlaneLanding size={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
