import { EventContent } from '@/shared/types/eventContent';
import { BookOpenText } from 'lucide-react';
import { HrIcon } from '../atoms/hrIcon';

export default async function AboutEvent({ event }: { event: EventContent }) {
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

      
    </div>
  );
}
