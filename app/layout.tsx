import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
                <footer>
                    Deck Builder #1
                </footer>
            </body>
        </html>
    )
}