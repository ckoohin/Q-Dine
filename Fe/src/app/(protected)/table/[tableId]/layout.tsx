import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import { cn } from '@/libs/utils';
import Sidebar from '@/components/layouts/customer/sideber/Sidebar';
import Footer from '@/components/layouts/customer/footer/Footer';
import Header from '@/components/layouts/customer/header/Header';
import { redirect } from "next/navigation";
import { toast } from 'sonner';

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
    // const user: User | null = await getMeServer();

    // if (!user || !hasAnyRole(user, ["CUSTOMER"])) {
    //     redirect("/login?error=forbidden");
    // }


    return (
        <Providers>
            <Header />
            <div className={cn("flex h-screen overflow-hidden")}>
                <Sidebar />
                <main className="flex-1 flex flex-col overflow-hidden relative">
                    {children}
                </main>
            </div>
            <Footer />
        </Providers>
    );
}