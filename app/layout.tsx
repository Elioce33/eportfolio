import './globals.css'
import React from "react";

import {Nav} from "@/app/components/nav";
import {Footer} from "@/app/components/footer";

export default function RootLayout(props: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en">
        <body>
            <Nav />
            {props.children}
            <Footer />
        </body>
        </html>
    )
}