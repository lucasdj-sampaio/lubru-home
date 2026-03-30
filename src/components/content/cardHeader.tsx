import BgImage from '@/../assets/images/bg.jpeg';
import clsx from 'clsx';
import { Plane } from 'lucide-react';
import React from 'react';
import { Button } from '../atoms/button';
import { Header } from '../atoms/header';
import { HrIcon } from '../atoms/hrIcon';

export default function CardHeader() {
  const hr = <hr className="section-hr" />;
  const baseTitleClass =
    'font-secondary font-normal text-5xl md:text-6xl font-bold';
  const baseOpaqueTextClass = 'font-light text-opaque';

  const plane = (rotate?: boolean): React.ReactNode => (
    <Plane size={16} className={clsx(rotate && 'rotate-45')} />
  );

  return (
    <React.Fragment>
      <Header />

      <div
        style={{
          backgroundImage: `url(${BgImage.src})`,
        }}
        className={clsx(
          'flex flex-col p-10',
          'bg-cover bg-center bg-no-repeat',
        )}
      >
        <div className="flex flex-col text-center items-center gap-10 pt-12">
          {hr}

          <HrIcon icon={plane(true)} />

          <div className="flex flex-col items-center gap-6">
            <p className={clsx(baseOpaqueTextClass, 'text-sm text-spacing')}>
              EMBARQUE NESTA JORNADA CONOSCO!
            </p>

            <div>
              <h1 className={clsx(baseTitleClass, 'text-title')}>Chá de</h1>
              <h1 className={clsx(baseTitleClass, 'text-secondary')}>
                Casa Nova
              </h1>
            </div>

            <p
              className={clsx(
                baseOpaqueTextClass,
                'text-lg md:w-[30vw] text-center',
              )}
            >
              Venha celebrar conosco este novo destino da nossa história
            </p>
          </div>

          <Button href="#roadmap">{plane()} EMBARCAR</Button>

          {hr}
        </div>
      </div>
    </React.Fragment>
  );
}
