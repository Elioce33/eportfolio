import {Bubble} from "@/app/components/bubble";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente delectus asperiores obcaecati hic exercitationem culpa temporibus debitis nisi voluptatem, possimus perferendis molestiae accusamus ad! Illo debitis inventore provident fugiat?";

export default function Page() {
  return <>
    <h1>Eliott Collin</h1>
    <main>
      <Bubble title="Projects" link="projects">
        <div>
          <p>Some projects I've worked on, and am proud of</p>
          <ul>
            <li>Client FTP</li>
            <li>Modélisation 3D</li>
            <li>Serveur web</li>
            <li>Site web utilisation d'API</li>
            <li>[...]</li>
          </ul>
        </div>
      </Bubble>
      <Bubble title="School career" link="school">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Work experience" link="work">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Hobbies" link="hobbies">
        <p>{lorem}</p>
      </Bubble>
    </main>
  </>
}