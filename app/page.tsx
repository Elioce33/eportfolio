import {Bubble} from "@/components/bubble";
import {Article} from "@/components/article";
import Link from "next/link";

export default function Page() {
  return <>
    <Bubble className='presentation_bubble' title="About">
      <div>
        <div>
          Informations
          <ul className="list-disc list-inside">
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
      <div className="container-fluid">
        <div className="row row-cols-2">
          <div className="col">
            <Article className="projects h-100">
              <h2><Link href="projects">Projects</Link></h2>
              <div>
                <p>Quelques projets sur les quels j'ai travaillé et dont je suis fière. La plus part sont des application web, et sont donc disponible en ligne !</p>
                <ul className="list-disc list-inside">
                  <li><Link href="projects/client-ftp">Client FTP en Java</Link></li>
                  <li><Link href="projects/modelisation-3d">Modélisation 3D</Link></li>
                  <li><Link href="projects/http-server">Serveur web</Link></li>
                  <li><Link href="projects/just-series">Site web avec utilisation d'API externe</Link></li>
                  <li>[...]</li>
                </ul>
              </div>
            </Article>
          </div>
          <div className="col">
            <Article className="schools h-100">
              <h2><Link href="school_career">School career</Link></h2>
              <p>C'est grâce à l'école et l'université que j'ai appris beaucoup de chose. Au début je souhaité être développeur de jeux vidéos, et maintenant ce qui m'intéresse le plus est de développer des site web et des application de bureaux. [...]</p>
            </Article>
          </div>
          <div className="col">
            <Article className="works h-100">
              <h2><Link href="works">Work experience</Link></h2>
              <p>J'ai aussi beaucoup appris en travaillant au sain d'équipe de développeur durant mes éxpérience professionnels [...]</p>
            </Article>
          </div>
          <div className="col">
            <Article className="hobbies h-100">
              <h2><Link href="hobbies">Hobbies</Link></h2>
              <p>Ce qui caractérise quelqu'un c'est aussi ce qu'il aime faire. [...]</p>
            </Article>
          </div>
        </div>
      </div>
    </main>
  </>
}