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
import { getMeServer } from '@/lib/auth/auth.server';
import { isAdmin } from '@/lib/permissions';
import { toast, Toaster } from 'sonner';

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
    const user : User | null = await getMeServer();
    
    console.log("user", user);

    if (!user) {
        redirect("/login");

        toast.error("Mời Bạn Đăng Nhập");
    }
    
    if (!isAdmin(user)) {
        redirect("/login");
        toast.error("Bạn Không Có Quyền Truy Cập Vào Trang Này");
    }
    
    return (
        <Providers>
            <Toaster richColors={true} position="top-right"/>
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