 
import '@/app/ui/global.css';
import { inter, lusitana } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lusitana.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
