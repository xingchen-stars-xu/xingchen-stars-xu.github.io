import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://xingchen-stars-xu.xingche7.chatgpt.site'),
  title: 'Xingchen (Stars) Xu | Engineering Education Researcher',
  description:
    'Xingchen (Stars) Xu is an engineering education researcher studying quantitative methods, AI-enabled learning, and student well-being.',
  openGraph: {
    url: 'https://xingchen-stars-xu.xingche7.chatgpt.site',
    title: 'Xingchen (Stars) Xu | Engineering Education Researcher',
    description:
      'Research at the intersection of quantitative methods, AI-enabled learning, and student well-being.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Xingchen (Stars) Xu — Engineering Education Researcher' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xingchen (Stars) Xu | Engineering Education Researcher',
    description: 'Research at the intersection of quantitative methods, AI-enabled learning, and student well-being.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
