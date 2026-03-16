import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import { cn } from '@/libs/utils';
import SidebarAdmin from '@/components/layouts/admin/sideber/Sidebar';
import Header from '@/components/layouts/admin/header/Header';
import { redirect } from "next/navigation";
import { Toaster } from 'sonner';
import { User } from '@/features/auth/types/auth.type';
import { isAdmin } from '@/features/auth/permissions';
import { getMeServer } from '@/features/auth/auth.server';
import Container from '@/components/Container';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

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

    if (!user) {
        redirect("/login?error=unauthorized");
    }

    if (!isAdmin(user)) {
        redirect("/login?error=unauthorized");
    }

    return (
        <Providers>
            <Toaster richColors={true} position="top-right" />
            <SidebarProvider>

                <div className={cn("flex h-screen overflow-hidden w-full")}>
                    <SidebarAdmin />
                    <main className="flex-1 flex flex-col relative ">
                        <Header />
                        <Container
                            className='bg-[#F8FAF8] h-full'
                            classNameContent='max-w-[1600px] px-8 py-8'
                        >
                            {children}
                        </Container>
                        {/* <Footer /> */}
                    </main>
                </div>
            </SidebarProvider>

        </Providers>
    );
}