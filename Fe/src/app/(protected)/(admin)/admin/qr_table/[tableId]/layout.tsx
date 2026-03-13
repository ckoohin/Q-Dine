import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import { cn } from '@/libs/utils';
import Sidebar from '@/components/layouts/admin/sideber/Sidebar';
import Footer from '@/components/layouts/admin/Footer';
import Header from '@/components/layouts/admin/header/Header';
import Container from '@/components/Container';
import { QrTableProvider } from '@/features/qr_table/context/qr_table.context';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <QrTableProvider>
                {children}
            </QrTableProvider>
        </>
    );
}