import type { Metadata } from 'next'
import localFont from "next/font/local";
import './globals.css'


const typewriter = localFont({
  src: "../public/font/typewriter-bold.ttf",
});

export const metadata: Metadata = {
  title: 'Learning Next Js 14',
  description: 'Learn Next Js 14 using sniipets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${typewriter.className} bg-slate-200`}>
        <div className='max-w-[1920px] mx-auto'>{children}</div>
      </body>
    </html>
  );
}
