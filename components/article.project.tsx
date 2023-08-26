import {Article} from "@/components/article";
import Link from "next/link";

export function ArticleProject({className = "", children, project}: any) {
  const {name, slug, description, languages, technologies, links} = project;
  const languagesItems = languages.map((language: string, index: number) => <li key={index}>{language}</li>);
  const technologiesItems = technologies.map((technology: string, index: number) => <li key={index}>{technology}</li>);
  const linksItems = links.map(({url, name}: { url: string, name: string }, index: number) => <li key={index}><a
    href={url}>{name}</a></li>);

  const title = <Link href={"projects/" + slug}>{name}</Link>;

  const content = <>
    <h2>{title}</h2>

    <p>{description}</p>

    <div className="project_tools row">
      <div className="languages col">
        {languages.length > 0 && <div className="content h-100">
            <h3>Language</h3>
            <ul>{languagesItems}</ul>
        </div>}
      </div>
      <div className="technologies col">
        {technologies.length > 0 && <div className="content h-100">
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