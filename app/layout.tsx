import React from "react";

import 'bootstrap/dist/css/bootstrap.css'
import './globals.scss'
import '@styles/bubble_text.css'

import {Nav} from "@/components/nav";
import {Footer} from "@/components/footer";


export default function RootLayout(props: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en">
        <body>
            <Nav />

            <div style={{
                textAlign: "center",
                display: "block",
                border: "2px solid black",
                width: "40%",
                margin: "2% auto",
                backgroundColor: "yellow"
            }}>
                <span style={{fontSize: "3em"}}>🚧 Work in progress 🚧 <span style={{fontStyle: "italic", fontSize: "0.5em"}}>I swear...</span></span>
            </div>

            <div className='page'>
                {props.children}
            </div>
            <Footer />
        </body>
        </html>
    )
}