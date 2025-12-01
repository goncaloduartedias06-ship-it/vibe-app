// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const meta Metadata = {
  title: 'Vibe - Historical POV Videos',
  description: 'Generate cinematic first-person historical videos with AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
