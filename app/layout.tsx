import {ReactNode} from "react";

import 'bootstrap/dist/css/bootstrap.css'
import '@components/Article/Article.module.css'
import '@components/Article/ArticleProject/ArticleProject.module.css'
import './globals.scss'

import {Footer} from "@/components/Footer";
import {Header} from "@components/Header";


export default function RootLayout(props: {
  children: ReactNode,
}) {


  return (
    <html lang="en">
    <body>
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

    <Header/>

    <div className='page'>
      {props.children}
    </div>
    <Footer/>
    </body>
    </html>
  )
}