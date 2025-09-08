import { AppHeader } from '@/components/layout/app-header';
import React from 'react';

interface IAppLayout {
    children: React.ReactNode;
}

export default function AppLayout({ children }: IAppLayout) {
    return (
        <html lang="en">
            <body>
                <AppHeader />
                <div>{children}</div>
            </body>
        </html>
    );
}
