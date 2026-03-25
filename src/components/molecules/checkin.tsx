'use client';
import { Plane, TicketsPlane } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../atoms/button';
import { HrIcon } from '../atoms/hrIcon';
import Dropdown, { SelectOption } from './dropdown';

export default function Checkin() {
  const [companion, setCompanion] = useState('');

  const options = (): SelectOption[] => {
    let options = [{ value: '1', label: '1 Passageiro' }];

    for (var i = 2; i < 11; i++) {
      options.push({ value: i.toString(), label: `${i} Passageiros` });
    }

    return options;
  };

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

      <form>
        <Dropdown
          label="ACOMPANHANTES A BORDO"
          name="dropdown_companion"
          value={companion}
          setState={setCompanion}
          options={options()}
        />

        <Button onClick={() => {}}>
          <Plane size={16} />
          Fazer Check-in
        </Button>
      </form>
    </div>
  );
}
