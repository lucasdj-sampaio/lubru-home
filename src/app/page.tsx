import { fetchStrapi } from '@/app/api/strapi';
import { CountdownTimer } from '@/components/atoms/countdownTimer';
import { HrIcon } from '@/components/atoms/hrIcon';
import AboutEvent from '@/components/molecules/aboutEvent';
import CardHeader from '@/components/molecules/cardHeader';
import Checkin from '@/components/molecules/checkin';
import GiftBlock from '@/components/molecules/giftBlock';
import { EventContent } from '@/shared/types/eventContent';
import { WishList } from '@/shared/types/wishlist/wishlist';
import clsx from 'clsx';
import { Clock } from 'lucide-react';
import React from 'react';

export default async function Home() {
  const json = await fetchStrapi('event');
  const event = EventContent.fromJson(json);

  const jsonGifts = await fetchStrapi('gifts?populate[Gift][populate]=*', {
    revalidate: 7200,
  });
  const wishList = WishList.fromJson(jsonGifts);

  const sectionClass = 'p-10 flex flex-col gap-8 items-center';
  const content: React.ReactNode[] = [
    <React.Fragment>
      <div className="section-title">
        <HrIcon icon={<Clock size={16} />} />
        <h2>Contagem Regressiva</h2>
      </div>

      <CountdownTimer limit={event.date} />
    </React.Fragment>,

    <AboutEvent event={event} />,
    <Checkin />,
    <GiftBlock section={wishList} />,
  ];

  return (
    <div id="home" className="relative">
      <CardHeader />

      {content.map((item, i) => {
        return (
          <section
            key={`section_${i}`}
            className={clsx(
              i % 2 == 0
                ? 'bg-primary [&_h1]:text-title'
                : 'bg-background [&_h1]:text-primary',
              sectionClass,
            )}
          >
            {item}
          </section>
        );
      })}
    </div>
  );
}
