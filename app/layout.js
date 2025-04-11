// app/layout.js
import '../styles/globals.css';
import { Roboto } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Nunito } from 'next/font/google';  // Импорт шрифта Nunito

const nunito = Nunito({ subsets: ['latin'], weight: ['300', '400', '700'] }); 
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Karina Sparkle | Girl next door',
  description: 'Exclusive Escort Service ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
