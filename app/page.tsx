import Link from "next/link";
import {Bubble} from "@/components/Bubble";
import {Article} from "@components/Article/Article";
import {BubbleSquare} from "@components/BubbleSquare";

export default function Page() {
  return <>
    <main className="home container">
      <div className="container-fluid">
        <div className={"presentation"}>
          <div className='presentation_bubbles'>
            <Bubble className={"information_list_bubble"}>
              <h3 className={"pt-5"}>About</h3>
              <ul className="list-unstyled text-center">
                <li>Prénom : Eliott</li>
                <li>Nom: Collin</li>
                <li>Age: 21 ans</li>
              </ul>
            </Bubble>
            <Bubble className={"cv_bubble"}>
              <h3 className={"pt-5"}>CV</h3>
              <p>Vous pouvez voir mon CV en cliquant sur le bouton ci-dessous.</p>
              <a href="/CV_Eliott_Collin.pdf" target={"_blank"} className="btn btn-info">CV_Eliott_Collin.pdf</a>
            </Bubble>
          </div>

          <BubbleSquare className={"page_description_bubble"}>
            <div className={"row"}>
              <div className={"col-9"}>
                <h2>Présentation</h2>
                <div className={"px-2"}>
                  <p>Jeune diplômé d'un bac + 3 et fort d'expérience en tant que développeur backend, je suis également ouvert au développement frontend.</p>
                  <p>Je cherche continuellement à apprendre de nouvelles façons de faire et à augmenter mes connaissances.</p>
                </div>
              </div>
              <div className={"col"}>
                <img src="/images/me_square.png" alt="Photo de moi" className={"img-fluid img-thumbnail"}/>
              </div>
            </div>
          </BubbleSquare>
        </div>

        <div className="row row-cols-2">
          <div className="col">
            <Article className="projects h-100">
              <h2><Link href="projects">Projects</Link></h2>
              <div>
                <p>Quelques projets sur les quels j'ai travaillé et dont je suis fière. La plus part sont des application web, et sont donc disponible en ligne !</p>
                <ul className="list-disc list-inside">
                  <li><Link href="projects/client-ftp">Client FTP en Java</Link></li>
                  <li><Link href="projects/modelisation-3d">Modélisation 3D</Link></li>
                  <li><Link href="projects/http-server">Serveur web en C</Link></li>
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
              <h2><Link href="works">Works experiences</Link></h2>
              <p>J'ai aussi beaucoup appris en travaillant au sain d'équipe de développeur durant mes éxpérience professionnels [...]</p>
            </Article>
          </div>
          <div className="col">
            <Article className="hobbies h-100">
              <h2><Link href="knowledges">Knowledges</Link></h2>
              <p>[...]</p>
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