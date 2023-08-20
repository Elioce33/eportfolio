import {projects} from "../projects.json";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const project: any = projects.find((project) => project.slug === params.slug);
  const {name, description, presentation, languages, technologies, links} = project;

  const languagesItems = languages.map((language: string, index: number) => <li key={index}>{language}</li>);
  const technologiesItems = technologies.map((technology: string, index: number) => <li key={index}>{technology}</li>);
  const linksItems = links.map(({url, name}: {url: string, name: string}, index: number) => <li key={index}><a href={url}>{name}</a></li>);


  return <>
    <h1>Projects</h1>
    <main>
      <h2>{name}</h2>
      <p>{description}</p>

      { presentation && <>
          <h2>Présentation</h2>
          <p>{presentation}</p>
      </>}

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