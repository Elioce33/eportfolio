import './globals.css'
import React from "react";

import {Nav} from "@/app/nav";

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
            <Nav/>
            {children}
        </body>
        </html>
    )
}