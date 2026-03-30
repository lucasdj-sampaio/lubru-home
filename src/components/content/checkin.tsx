'use client';
import { useToast } from '@/shared/hooks/toast';
import { Plane, TicketsPlane } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../atoms/button';
import Dropdown from '../atoms/dropdown';
import { HrIcon } from '../atoms/hrIcon';
import Input from '../atoms/input';
import { ToastContainer } from '../molecules/toastContainer';

const companionOptions = Array.from({ length: 10 }, (_, i) => {
  const value = (i + 1).toString();
  return {
    value,
    label: `${value} Passageiro${i > 0 ? 's' : ''}`,
  };
});

export default function Checkin() {
  const [name, setName] = useState('');
  const [companion, setCompanion] = useState('1');
  const [sending, setSending] = useState(false);

  const { toasts, addToast, removeToast } = useToast();

  async function sendCheckin() {
    if (!name.trim()) {
      addToast('Informe o nome do passageiro.', 'error');
      return;
    }

    setSending(true);

    try {
      const res = await fetch('/api/strapi/checkin', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify({
          name,
          companions: Number(companion),
        }),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(
          json?.error?.message ||
            json?.message ||
            `${res.status} ${res.statusText}`,
        );
      }

      addToast('Check-in realizado com sucesso.', 'success');

      setName('');
      setCompanion('1');
    } catch (err) {
      addToast(
        err instanceof Error ? err.message : 'Erro de rede. Tente novamente.',
        'error',
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div id="checkin" className="flex flex-col gap-8">
      <div className="section-title">
        <HrIcon icon={<TicketsPlane size={16} />} />
        <h2>Check-in</h2>
        <h1>Confirme seu Embarque</h1>
        <hr className="section-hr" />
      </div>

      <p className="max-w-lg mx-auto text-center text-opaque leading-relaxed">
        Garanta seu lugar nesta viagem especial. Faça seu check-in abaixo.
      </p>

      <form
        className="flex flex-col gap-8"
        onSubmit={e => {
          e.preventDefault();
          sendCheckin();
        }}
      >
        <Input
          label="PASSAGEIRO"
          name="user_name"
          value={name}
          placeholder="Nome completo do passageiro"
          setState={setName}
        />

        <Dropdown
          label="ACOMPANHANTES A BORDO"
          name="dropdown_companion"
          value={companion}
          setState={setCompanion}
          options={companionOptions}
        />

        <Button type="submit" disabled={sending}>
          <Plane size={16} />
          {sending ? 'Enviando...' : 'Fazer Check-in'}
        </Button>
      </form>

      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
