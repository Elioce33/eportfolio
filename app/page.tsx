import {Bubble} from "@/app/components/bubble";

export default function Page() {
  return <>
    <Bubble className='presentation_bubble' title="About">
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
    </Bubble>
    <h1>Eliott Collin</h1>
    <main>
      <Bubble title="Projects" link="projects">
        <div>
          <p>Je vous présenterais quelques projets sur les quels j'ai travaillé et dont je suis fière.</p>
          <ul>
            <li>Client FTP</li>
            <li>Modélisation 3D</li>
            <li>Serveur web</li>
            <li>Site web avec utilisation d'API externe</li>
            <li>[...]</li>
          </ul>
        </div>
      </Bubble>
      <Bubble title="School career" link="school">
        <p>C'est grâce à l'école et l'université que j'ai appris beaucoup de chose. Au début je souhaité être développeur de jeux vidéos, et maintenant ce qui m'intéresse le plus est de développer des site web et des application de bureaux. [...]</p>
      </Bubble>
      <Bubble title="Work experience" link="work">
        <p>J'ai aussi beaucoup appris en travaillant au sain d'équipe de développeur durant mes éxpérience professionnels [...]</p>
      </Bubble>
      <Bubble title="Hobbies" link="hobbies">
        <p>Ce qui caractérise quelqu'un c'est aussi ce qu'il aime faire. [...]</p>
      </Bubble>
    </main>
  </>
}