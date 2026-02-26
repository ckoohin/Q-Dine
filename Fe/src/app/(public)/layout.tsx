import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import { cn } from '@/libs/utils';
import { Header } from '@/app/(public)/_components/header/Header';
import { Footer } from '@/app/(public)/_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Restaurant Ordering',
    description: 'QR Code Ordering System',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <div className="savory-scope">
                <Header />
                {children}
                <Footer />
            </div>
        </Providers>
    );
}