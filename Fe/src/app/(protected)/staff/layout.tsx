import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import { cn } from '@/libs/utils';
import Sidebar from '@/components/layouts/admin/sideber/Sidebar';
import Footer from '@/components/layouts/admin/Footer';
import Header from '@/components/layouts/admin/header/Header';
import { redirect } from "next/navigation";
import { User } from '@/features/auth/types/auth.type';
import { hasAnyRole } from '@/features/auth/permissions';
import { getMeServer } from '@/features/auth/auth.server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Restaurant Ordering',
    description: 'QR Code Ordering System',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user: User | null = await getMeServer();

    if (!user || !hasAnyRole(user, ["STAFF", "ADMIN"])) {
        redirect("/login?error=forbidden");
    }


    return (
        <Providers>
            <div className={cn("flex h-screen overflow-hidden")}>
                <Sidebar />
                <main className="flex-1 flex flex-col overflow-hidden relative">
                    <Header />
                    {children}
                    <Footer />
                </main>
            </div>
        </Providers>
    );
}