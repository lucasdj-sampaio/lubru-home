import { Button } from '@/components/atoms/button';
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

  if (!res.ok) {
    const text = await res.text();
    console.error('Erro da API:', text);
    throw new Error(`Erro ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data.name;
}

export default async function ThanksPage({ params }: Props) {
  const { id } = await params;

  const giftName = await deactivateGift(id);

  return (
    <main className="min-h-screen flex items-center text-center justify-center bg-item-background">
      <div className="flex flex-col items-center gap-3 max-w-lg">
        <div className="rounded-full bg-secondary/10 w-max p-5 mb-6 text-secondary">
          <Heart size={42} />
        </div>

        <span className="text-md font-medium tracking-widest text-secondary">
          OBRIGADO!
        </span>

        <h1 className="text-4xl font-medium font-secondary text-primary">
          Presente recebido!
        </h1>

        <div className="flex flex-col gap-4 items-center font-semibold">
          <hr className="section-hr m-5" />

          <p className="text-regular">
            Agradecemos de coração pela sua contribuição com
            <strong className="text-secondary">{` ${giftName}`}</strong>.
          </p>

          <p className="text-regular m-2">
            Sua generosidade nos ajuda a construir o nosso novo lar. Mal podemos
            esperar para celebrar esse momento com você! ✈️
          </p>

          <Button href={{ url: '/' }} variant="secondary" className="w-max">
            <Home /> Voltar ao início
          </Button>
        </div>
      </div>
    </main>
  );
}
