import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import "./globals.css"

export const metadata: Metadata = {
    title: "Craftbook",
    description:
        "An invitation to explore the artistry, care, and emotion woven into every creation.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
                {children}
            </body>
        </html>
    )
}
