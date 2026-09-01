"use client";

import { Header, Footer } from "@/components/layout";

function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
                <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}

export default AppLayout;