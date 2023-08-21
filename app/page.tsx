import {Bubble} from "@/app/components/bubble";
import Link from "next/link";

export default function Page() {
  return <>
    <Bubble className='presentation_bubble' title="About">
      <div>
        <div>
          Informations
          <ul>
            <li>Prénom : Eliott</li>
            <li>Nom: Collin</li>
            <li>Age: 18 ans</li>
          </ul>
        </div>
        <div>
          <p>Je suis un jeune développeur à la recherche de nouveaux projets. J'aime apprendre et la bonne humeur !</p>
        </div>
      </div>
    </Bubble>
    <h1>Eliott Collin</h1>
    <main className="home">
      <Bubble className="projects" title={<Link href="projects">Projects</Link>}>
        <div>
          <p>Quelques projets sur les quels j'ai travaillé et dont je suis fière. La plus part sont des application web, et sont donc disponible en ligne !</p>
          <ul>
            <li><Link href="projects/client-ftp">Client FTP en Java</Link></li>
            <li><Link href="projects/modelisation-3d">Modélisation 3D</Link></li>
            <li><Link href="projects/http-server">Serveur web</Link></li>
            <li><Link href="projects/just-series">Site web avec utilisation d'API externe</Link></li>
            <li>[...]</li>
          </ul>
        </div>
      </Bubble>
      <Bubble className="schools" title={<Link href="school_career">School career</Link>}>
        <p>C'est grâce à l'école et l'université que j'ai appris beaucoup de chose. Au début je souhaité être développeur de jeux vidéos, et maintenant ce qui m'intéresse le plus est de développer des site web et des application de bureaux. [...]</p>
      </Bubble>
      <Bubble className="works" title={<Link href="works">Work experience</Link>}>
        <p>J'ai aussi beaucoup appris en travaillant au sain d'équipe de développeur durant mes éxpérience professionnels [...]</p>
      </Bubble>
      <Bubble className="hobbies" title={<Link href="hobbies">Hobbies</Link>}>
        <p>Ce qui caractérise quelqu'un c'est aussi ce qu'il aime faire. [...]</p>
      </Bubble>
    </main>
  </>
}