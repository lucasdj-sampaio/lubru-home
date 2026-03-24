import { TicketsPlane } from 'lucide-react';
import { HrIcon } from '../atoms/hrIcon';

export default function Checkin() {
  return (
    <div id="checkin" className="flex flex-col gap-8">
      <div className="section-title">
        <HrIcon icon={<TicketsPlane size={16} />} />
        <h2>Check-in</h2>

        <h1>Confirme seu Embarque</h1>

        <hr className="section-hr" />
      </div>

      <p className="max-w-lg mx-auto leading-relaxed text-opaque">
        Garanta seu lugar nesta viagem especial. Faça seu check-in abaixo.
      </p>
    </div>
  );
}
