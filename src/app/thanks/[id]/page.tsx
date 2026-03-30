import { fetchStrapi } from '@/app/api/strapi';
import { GiftResponseDTO } from '@/shared/types/dtos/giftResponse';
import { Home } from 'lucide-react';

interface Props {
  params: { id: number };
}

export default async function ThanksPage({ params }: Props) {
  const { id } = params;

  const response = await fetchStrapi<GiftResponseDTO>(
    `gifts/${id}/deactivate`,
    {
      method: 'POST',
      noStore: true,
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN ?? ''}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return (
    <main className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center max-w-xl space-y-6">
        <h2 className="text-sm tracking-widest text-secondary">OBRIGADO!</h2>

        <h1 className="text-4xl font-secondary text-primary">
          Presente recebido!
        </h1>

        <p className="text-regular">
          Agradecemos de coração pela sua contribuição com{' '}
          <span>{response.name}</span>
        </p>

        <p className="text-regular">
          Sua generosidade nos ajuda a construir o nosso novo lar. Mal podemos
          esperar para celebrar esse momento com você! ✈️
        </p>

        <a
          href="/"
          className="inline-block border border-secondary px-6 py-2 rounded-md text-secondary hover:bg-secondary/10 transition"
        >
          <Home /> Voltar ao início
        </a>
      </div>
    </main>
  );
}
