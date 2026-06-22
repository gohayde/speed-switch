import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Speed Switch — Premium Car Rental Dubai',
  description:
    'Premium luxury car rental in Dubai. Lamborghini, Mercedes, Bentley and more — delivered to your hotel or residence. Book in minutes on WhatsApp.',
  openGraph: {
    title: 'Speed Switch — Premium Car Rental Dubai',
    description: 'Premium luxury car rental in Dubai. Delivered to your door. Book on WhatsApp.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speed Switch — Premium Car Rental Dubai',
    description: 'Premium luxury car rental in Dubai. Delivered to your door. Book on WhatsApp.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Cairo:wght@400;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/assets/hero-car.webp" fetchPriority="high" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
