import type { Metadata } from 'next';
import { Cinzel, Raleway } from 'next/font/google';
import '../styles/globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400'],
});

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'LuBru Apê',
  description: 'Lubru Home - Apê Lucas e Brunna ♥️',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cinzel.variable}>
      <body
        suppressHydrationWarning
        className={`${raleway.className} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
