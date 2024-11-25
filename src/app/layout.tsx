import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import FeaturedCharacters from '@/components/FeaturedCharacters';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Barti Code Challenge',
  description: 'Developed by Nick Barone on 11/25/24',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <div className="main container">{children}</div>
        <FeaturedCharacters />
        <Footer />
      </body>
    </html>
  );
}
