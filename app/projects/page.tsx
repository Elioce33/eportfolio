import {Bubble} from "@/app/components/bubble";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente delectus asperiores obcaecati hic exercitationem culpa temporibus debitis nisi voluptatem, possimus perferendis molestiae accusamus ad! Illo debitis inventore provident fugiat?";

export default function Page() {
  return <>
    <h1>Projects</h1>
    <main>
      <Bubble title="FTP client">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Modélisation 3D">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Serveur Web">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Site web utilisation d'API">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Système expert">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Application Web de gestion de base de donnée">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Site d'upload de fichier">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="DebtSwapper">
        <p>{lorem}</p>
      </Bubble>
    </main>
  </>
}