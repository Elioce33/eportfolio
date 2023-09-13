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
      La première version du projet était une application utilisable seulement depuis un terminal. Le client établit
      une connexion avec le serveur FTP et sert d'interface pour communiquer avec le serveur. L'utilisation du client
      se fait uniquement avec les commandes du protocole FTP. <br/>
      Dans la seconde version du projet, nous avons ajouté une interface graphique pour rendre l'utilisation du client
      plus simple. Cependant, il est toujours nécessaire d'entrer les commandes à la main.
    </p>
  </>,
  "modelisation-3d": <></>,
  "http-server": <></>,
  "just-series": <>
    <p>
      Il est possible de faire des recherche et d'ajouter certaines séries dans nos favoris (localement)
    </p>
  </>,
  "systeme-expert": <>
    <p>
      Un système expert est un outil capable de reproduire les mécanismes cognitifs d'un expert, dans un domaine
      particulier. Il s'agit de l'une des voies tentant d'aboutir à l'intelligence artificielle.
    </p>
  </>,
  "bdd-manager": <></>,
  "file-upload": <>
    <p>
      Utilisation possible seulement avec un compte utilisateur.
    </p>
  </>,
  "debt-swapper": <>
    <p>
      Chaque utilisateur possède un compte et peut créer des événements
    </p>
  </>,
  "2048": <></>,
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

  const project_presentation = PROJECTS_PRESENTATION[project_slug];
  const presentation_element = project_presentation && <div className={"presentation"}>
      <h2>Présentation</h2>
    {project_presentation}
  </div>;

  return <>
    <div className={"text-center"}>
      <h2>{name}</h2>
      <div className="description fst-italic">
        <p>{description}</p>
      </div>
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