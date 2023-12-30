import {ReactNode} from "react";
import {Open_Sans} from 'next/font/google';
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";

import type {Metadata} from 'next';

import './globals.scss';

const openSans = Open_Sans({
    subsets: ['latin', 'cyrillic'],
    weight: ["300", "400", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: 'Next блог',
    description: 'Блог на Next.js',
};

type Props = {
    children: ReactNode
};

export default function RootLayout({children}: Props) {
    return (
        <html lang="ru">
            <body className={openSans.className}>
                <Container>
                    <Header/>
                    {children}
                </Container>
            </body>
        </html>
    );
}
