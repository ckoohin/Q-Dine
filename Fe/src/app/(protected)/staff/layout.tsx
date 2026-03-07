import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import { cn } from '@/libs/utils';
import Sidebar from '@/components/layouts/admin/sideber/Sidebar';
import Footer from '@/components/layouts/admin/Footer';
import Header from '@/components/layouts/admin/header/Header';
import { useAuth } from '@/lib/auth/auth.hooks';
import { User } from '@/lib/types/auth.type';
import { redirect } from "next/navigation";
import { toast } from 'sonner';
import { hasAnyRole, isStaff } from '@/lib/permissions';
import { getMeServer } from '@/lib/auth/auth.server';

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