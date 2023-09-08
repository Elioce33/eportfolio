import styles from './ArticleProject.module.css';

import Link from "next/link";
import {Article} from "@components/Article/Article";

export function ArticleProject({className = "", project}: any) {
  const {name, slug, description, shortDescription, languages, technologies, links} = project;
  const languagesItems = languages.map((language: string | { name: string, slug: string }, index: number) => <li
    key={index}>{typeof language === "object" ? language.name : language}</li>);
  const technologiesItems = technologies.map((technology: string | { name: string, slug: string }, index: number) => <li
    key={index}>{typeof technology === "object" ? technology.name : technology}</li>);
  const linksItems = links.map(({url, name}: { url: string, name: string }, index: number) => <li key={index}><a
    href={url}>{name}</a></li>);

  const title = <Link href={"projects/" + slug}>{name}</Link>;

  const content = <>
    <h2>{title}</h2>

    <p>{description}</p>

    <div className={"row"}>
      <div className={"col-8"}>
        <div className={"container"}>
          <div className={`${styles.project_tools} row row-cols-1`}>
            {languages.length > 0 &&
                <div className={`${styles.languages} col mx-1`}>
                    <div className={`${styles.content} h-100 p-3`}>
                        <h3>Language</h3>
                        <ul>{languagesItems}</ul>
                    </div>
                </div>
            }
            {technologies.length > 0 &&
                <div className={`${styles.technologies} col mx-1`}>
                    <div className={`${styles.content} h-100 p-3`}>
                        <h3>Technologies</h3>
                        <ul>{technologiesItems}</ul>
                    </div>
                </div>
            }
          </div>
        </div>
      </div>
      <div className={"col"}>
        <figure className="figure">
          <img src={`/images/projects/${slug}.png`} alt={shortDescription} className={"figure-img img-fluid rounded"}/>
            <figcaption className="figure-caption">{shortDescription}</figcaption>
        </figure>

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