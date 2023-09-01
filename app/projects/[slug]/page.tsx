import {projects} from "../projects.json";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const project: any = projects.find((project) => project.slug === params.slug);
  const {name, description, presentation, languages, technologies, links} = project;

  const languagesItems = languages.map((language: string | {name: string, slug : string}, index: number) => <li key={index}>{typeof language === "object" ? language.name : language}</li>);
  const technologiesItems = technologies.map((technology: string | {name: string, slug : string}, index: number) => <li key={index}>{typeof technology === "object" ? technology.name : technology}</li>);
  const linksItems = links.map(({url, name}: {url: string, name: string}, index: number) => <li key={index}><a href={url}>{name}</a></li>);


  return <>
    <h1>Projects</h1>
    {/* insert a nav menu for this page */}
    <main className="project container-fuild p-3">
      <h2>{name}</h2>
      <div className="description border-start border-2 border-dark ps-2">
        <p>{description}</p>
      </div>

      <div className={"presentation"}>
        { presentation && <>
            <h2>Présentation</h2>
            <p>{presentation}</p>
        </>}
      </div>

      {languages.length > 0 && <>
          <h3>Language</h3>
          <ul>{languagesItems}</ul>
      </>}
      {technologies.length > 0 && <>
          <h3>Technologies</h3>
          <ul>{technologiesItems}</ul>
      </>}
      {links.length > 0 && <>
          <h3>Links</h3>
          <ul>{linksItems}</ul>
      </>}

      <Link href="/projects">Back to Projects</Link>
    </main>
  </>
}