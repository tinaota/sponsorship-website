import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Sponsorship Website',
    description: 'Sponsor a child today',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={manrope.variable} suppressHydrationWarning={true}>
                <a href="#main-content" className="skipLink">Skip to main content</a>
                {children}
            </body>
        </html>
    );
}
