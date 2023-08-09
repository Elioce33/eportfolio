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
            <div className='page'>
                {props.children}
            </div>
            <Footer />
        </body>
        </html>
    )
}