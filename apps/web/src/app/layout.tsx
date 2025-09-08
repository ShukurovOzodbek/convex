import React from 'react';

import '@/styles/globals.css';

interface ILayout {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
