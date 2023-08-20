import {Bubble} from "@/app/components/bubble";
import {projects} from "./projects.json";
import Link from "next/link";

function BubbleProject({project}: any) {
  const {name, slug, description, languages, technologies, links} = project;
  const languagesItems = languages.map((language: string, index: number) => <li key={index}>{language}</li>);
  const technologiesItems = technologies.map((technology: string, index: number) => <li key={index}>{technology}</li>);
  const linksItems = links.map(({url, name}: {url: string, name: string}, index: number) => <li key={index}><a href={url}>{name}</a></li>);

  const title = <Link href={"projects/" + slug}>{name}</Link>;

  return <Bubble className="project_bubble" title={title}>
    <p>{description}</p>

    <div className="project_tools">
      {languages.length > 0 && <>
          <h3>Language</h3>
          <ul>{languagesItems}</ul>
      </>}
      {technologies.length > 0 && <>
          <h3>Technologies</h3>
          <ul>{technologiesItems}</ul>
      </>}
    </div>
    {links.length > 0 && <>
        <h3>Links</h3>
        <ul>{linksItems}</ul>
    </>}
  </Bubble>
}


const projectsItems = projects.map((project, index) => <BubbleProject key={index} project={project}/>);

export default function Page() {
  return <>
    <h1>Projects</h1>
    <main>
      {projectsItems}
    </main>
  </>
}