import {Article} from "@components/Article/Article";
import Link from "next/link";
import Image from "next/image";


export function ArticleSchool({className = "", children, school}: any) {
  const {slug, name, address, url, logo} = school;

  return <>
    <Article className={`school-${slug} ${className}`}>
      <header className="school-header row">
        <div className="col">
          <h2><Link href={url} target="_blank">{name}</Link></h2>
          <span>{address}</span>
        </div>
        <div className="school-logo col text-end">
          <img src={`/images/schools/${slug}.png`} className="img-fluid" alt={`Logo de ${name}`}/>
        </div>
      </header>
      <div className="certificates">
        {children}
      </div>
    </Article>
  </>
}