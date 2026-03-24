import { WishList } from '@/shared/types/wishlist/wishlist';
import { Luggage } from 'lucide-react';
import { HrIcon } from '../atoms/hrIcon';

export default function GiftBlock({ section }: { section: WishList }) {
  return (
    <div id="baggage" className="flex flex-col gap-8">
      <div className="section-title">
        <HrIcon icon={<Luggage size={16} />} />
        <h2>Bagagem</h2>

        <h1>Lista de Presentes</h1>

        <hr className="section-hr" />
      </div>

      <p className="max-w-lg mx-auto leading-relaxed text-center text-regular">
        Ajude-nos a montar a bagagem do nosso novo lar! Sua presença é o que
        mais importa, mas aqui vão algumas sugestões.
      </p>
    </div>
  );
}
