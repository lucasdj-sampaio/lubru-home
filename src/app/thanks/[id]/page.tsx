import { Button } from '@/components/atoms/button';
import clsx from 'clsx';
import { Heart, Home } from 'lucide-react';

interface Props {
  params: { id: string };
}

async function deactivateGift(id: string): Promise<string> {
  const res = await fetch(
    `${process.env.STRAPI_BASEURL}/api/gifts/${id}/deactivate`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    },
  );

  if (!res.ok) throw new Error(`Erro ${res.status}: ${await res.text()}`);

  return (await res.json()).name;
}

export default async function ThanksPage({ params: { id } }: Props) {
  const giftName = await deactivateGift(id);
  const pClass = 'text-regular text-sm md:text-md';

  return (
    <main className="min-h-screen flex items-center justify-center text-center bg-item-background">
      <div className="flex flex-col items-center gap-3 max-w-lg">
        <div className="rounded-full bg-secondary/10 w-max p-3 md:p-5 mb-6 text-secondary">
          <Heart size={42} />
        </div>

        <span className="text-md font-medium tracking-widest text-secondary">
          OBRIGADO!
        </span>

        <h1 className="text-2xl md:text-4xl font-medium font-secondary text-primary">
          Presente recebido!
        </h1>

        <div className="flex flex-col gap-4 items-center font-semibold w-full max-w-[80vw]">
          <hr className="section-hr m-3 md:m-5" />

          <p className={pClass}>
            Agradecemos de coração pela sua contribuição
            {giftName && (
              <strong className="text-secondary">{`com ${giftName}`}</strong>
            )}
            .
          </p>

          <p className={clsx(pClass, 'm-2')}>
            Sua generosidade nos ajuda a construir o nosso novo lar. Mal podemos
            esperar para celebrar esse momento com você! ✈️
          </p>

          <Button href="/" variant="secondary" className="w-max">
            <Home /> Voltar ao início
          </Button>
        </div>
      </div>
    </main>
  );
}
