'use client';

import styles from './ArticleProject.module.css';

import Link from "next/link";
import {Article} from "@components/Article/Article";

export function ArticleProject({className = "", project}: any) {
  const {name, slug, description, shortDescription, languages, technologies, links} = project;

  const languagesItems = languages.map((language: string | { name: string, slug: string }, index: number) => <li key={index}>{typeof language === "object" ? language.name : language}</li>);
  const technologiesItems = technologies.map((technology: string | { name: string, slug: string }, index: number) => <li key={index}>{typeof technology === "object" ? technology.name : technology}</li>);
  const linksItems = links.map(({url, name}: { url: string, name: string }, index: number) => <li key={index}><a href={url} target={"_blank"}><i className="bi bi-box-arrow-up-right"></i> {name}</a></li>);
  const title = <Link href={"projects/" + slug}>{name}</Link>;

  function zoomIn(e: any) {
    console.log("zoomIn");
    const img_container = e.currentTarget.closest(".projectImage").querySelector(".zoomInContainer");
    img_container.hidden = false;
  }

  function zoomOut(e: any) {
    console.log("zoomOut");
    const img_container = e.currentTarget.parentElement;
    img_container.hidden = true;
  }

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
                        <h3>Technologies / frameworks</h3>
                        <ul>{technologiesItems}</ul>
                    </div>
                </div>
            }
          </div>
        </div>
      </div>
      <div className={"col"}>
        <div className={"projectImage"}>
          <div className={"zoomInContainer"} hidden={true}>
            <div className={styles.zoomOutHandler} onClick={zoomOut}></div> {/* zoom out handler */}
            <div className={styles.zoomInImgBackground}> {/* background */}
              <img src={`/images/projects/${slug}.png`} alt={shortDescription} className={styles.zoomImg}/>
            </div>
          </div>
          <div>
            <figure className={"figure"}>
              <img src={`/images/projects/${slug}.png`} alt={shortDescription} className={`figure-img img-fluid rounded`} style={{cursor: "zoom-in"}} onClick={zoomIn}/>
              <figcaption className="figure-caption">{shortDescription}</figcaption>
            </figure>
          </div>
        </div>
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