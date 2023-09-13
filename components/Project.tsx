import {projects} from "../app/projects/projects.json";

type Projects = {
  [key: string]: JSX.Element
}

const PROJECTS_PRESENTATION: Projects = {
  "client-ftp": <>
    <p>
      Ce projet a été réalisé dans le cadre du cours de "Programmation client/serveur" à l'université de Lille. Le but
      de ce projet est de réaliser un client FTP en Java qui respecte une implémentation minimal comme décrit dans la <a
      href={"https://www.rfc-editor.org/rfc/rfc959#section-5"} target={"_blank"}>section 5.1 du rfc959</a>.
    </p>
    <p>
      Nous avons eu 4 semaines pour réaliser ce projet en binôme. Parmi les outils que nous avons utilisés, il y a git
      avec la plateforme gitlab pour la gestion de version, et la plateforme discord pour la communication.
    </p>
    <p>
      La première version du projet était une application utilisable seulement depuis un terminal. Tout ce que faisait
      le client était d'établir la connection avec le serveur et de transféré les input utilisateur au serveur et
      d'afficher les réponses. La difficulté était qu'il fallait connaitre les commandes du protocole FTP pour pouvoir
      utilisé le client correctement.
    </p>
  </>
}

export function Project({project_slug}: { project_slug: string }): JSX.Element {
  const project: any = projects.find((project) => project.slug === project_slug);
  const {name, description, languages, technologies, links} = project;

  const languagesItems = languages.map((language: string | { name: string, slug: string }, index: number) => <li
    key={index}>{typeof language === "object" ? language.name : language}</li>);
const technologiesItems = technologies.map((technology: string | { name: string, slug: string }, index: number) => <li
  key={index}>{typeof technology === "object" ? technology.name : technology}</li>);
const linksItems = links.map(({url, name}: { url: string, name: string }, index: number) => <li key={index}><a
  href={url} target={"_blank"}>{name}</a></li>);


const presentation_element = <div className={"presentation"}>
    <h2>Présentation</h2>
    {PROJECTS_PRESENTATION[project_slug]}
  </div>;

  return <>
    <h2>{name}</h2>
    <div className="description border-start border-2 border-dark ps-2">
      <p>{description}</p>
    </div>

    {presentation_element}

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
  </>
}