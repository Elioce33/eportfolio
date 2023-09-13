import {ReactNode} from "react";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@components/Article/Article.module.css'
import '@components/Article/ArticleProject/ArticleProject.module.css'
import './globals.scss'

import {Footer} from "@/components/Footer";
import {Header} from "@components/Header";
import {Ocean} from "@components/Ocean";


export default function RootLayout(props: {
  children: ReactNode,
}) {


  return (
    <html lang="en">
    <body>
    <div className={"background"}></div>
    <Header/>

    {/* some bubble effect */}
    <Ocean/>

    {/* main content */}
    <div className='page'>
      {props.children}
    </div>

    <Footer/>
    </body>
    </html>
  )
}