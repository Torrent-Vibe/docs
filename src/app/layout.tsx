import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Torrent Vibe Documentation',
  description: 'A modern, cross-platform web/desktop interface that replaces the default qBittorrent WebUI. Offers real-time monitoring, advanced filtering & tagging, fine-grained bandwidth/scheduling controls, and dark-mode UI.',
  keywords: ['torrent', 'qbittorrent', 'torrent client', 'bittorrent', 'web ui', 'cross-platform'],
  authors: [{ name: 'Torrent Vibe Team' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
