import { Plane } from 'lucide-react';
import { HrIcon } from '../atoms/hrIcon';

export default function Footer() {
  return (
    <footer className="py-10 gap-4 bg-primary text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <HrIcon icon={<Plane className="rotate-45" size={16} />} />
      </div>

      <p className="font-secondary text-sm text-opaque/80 tracking-widest">
        Chá de Casa Nova — 2026
      </p>

      <p className="font-secondary text-xs text-opaque/60 mt-2 tracking-wider">
        Boa viagem para o nosso novo destino ✈
      </p>
    </footer>
  );
}
