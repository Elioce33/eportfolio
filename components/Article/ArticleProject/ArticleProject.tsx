import {Article} from "@components/Article/Article";
import Link from "next/link";
import styles from './ArticleProject.module.css';

export function ArticleProject({className = "", children, project}: any) {
  const {name, slug, description, languages, technologies, links} = project;
  const languagesItems = languages.map((language: string | {name: string, slug : string}, index: number) => <li key={index}>{typeof language === "object" ? language.name : language}</li>);
  const technologiesItems = technologies.map((technology: string | {name: string, slug : string}, index: number) => <li key={index}>{typeof technology === "object" ? technology.name : technology}</li>);
  const linksItems = links.map(({url, name}: { url: string, name: string }, index: number) => <li key={index}><a
    href={url}>{name}</a></li>);

  const title = <Link href={"projects/" + slug}>{name}</Link>;

  const content = <>
    <h2>{title}</h2>

    <p>{description}</p>

    <div className={`${styles.project_tools} row`}>
      <div className={`${styles.languages} col`}>
        {languages.length > 0 && <div className={`${styles.content} h-100`}>
            <h3>Language</h3>
            <ul>{languagesItems}</ul>
        </div>}
      </div>
      <div className={`${styles.technologies} col`}>
        {technologies.length > 0 && <div className={`${styles.content} h-100`}>
            <h3>Technologies</h3>
            <ul>{technologiesItems}</ul>
        </div>}
      </div>
    </div>
    {links.length > 0 && <>
        <h3>Links</h3>
        <ul>{linksItems}</ul>
    </>}
  </>

  return <>
    <Article className={`project-${slug} ${className}`}>
      {content}
    </Article>
  </>
}