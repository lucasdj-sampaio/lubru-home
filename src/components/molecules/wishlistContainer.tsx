'use client';
import { GiftItemDTO } from '@/shared/types/dtos/giftItem';
import { WishlistDTO } from '@/shared/types/dtos/wishlist';
import { formatBRL } from '@/util';
import { useState } from 'react';
import GiftCard from '../atoms/giftCard';
import { ItemCard } from '../atoms/itemCard';
import { Modal } from '../atoms/modal';
import { SvgIcon } from '../atoms/svgIcon';

interface WishlistProps {
  items: WishlistDTO;
}

export function WishlistContainer({ items }: WishlistProps) {
  const [openCategory, setOpenCategory] = useState(0);
  const [viewGift, setViewGift] = useState<GiftItemDTO | null>(null);

  const currentCategory = items.categories[openCategory];

  function handleOpenGift(gift: GiftItemDTO) {
    setViewGift(gift);
  }

  function handleCloseModal() {
    setViewGift(null);
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
        {items.categories.map((room, i) => (
          <ItemCard
            key={`category_${room.category}_${i}`}
            icon={<SvgIcon icon={room.icon} size={20} />}
            label={room.category}
            isActive={openCategory === i}
            onClick={() => setOpenCategory(i)}
          />
        ))}
      </div>

      {currentCategory.gifts.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {currentCategory.gifts.map((gift, i) => (
            <GiftCard
              key={`gift_${gift.id}_${i}`}
              gift={gift}
              onClick={() => handleOpenGift(gift)}
            />
          ))}
        </div>
      ) : (
        <p>Não temos mais itens para essa categoria</p>
      )}

      {viewGift && (
        <Modal open={!!viewGift} onClose={handleCloseModal}>
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="flex items-center justify-center gap-3 font-secondary text-2xl font-semibold text-primary">
              <SvgIcon icon={viewGift.icon} className="text-secondary" />
              {viewGift.name}
            </h2>

            <p className="text-sm text-text-regular">{viewGift.description}</p>
          </div>

          <div className="flex flex-col items-center gap-6 py-4">
            <div className="flex h-48 w-48 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-secondary/30 bg-secondary/5">
              <span className="text-xs text-text-regular">QR Code PIX</span>
            </div>

            <span className="inline-block rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-secondary">
              {formatBRL(viewGift.value)}
            </span>

            <div className="space-y-2 text-center">
              <p className="text-sm text-text-regular">
                Escaneie o QR Code acima para realizar o pagamento via PIX
              </p>

              <p className="text-xs text-secondary">
                Agradecemos de coração pela sua contribuição! ❤️
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
