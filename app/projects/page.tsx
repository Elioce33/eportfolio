import {Bubble} from "@/app/bubble";

const lorem = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente delectus asperiores obcaecati hic exercitationem culpa temporibus debitis nisi voluptatem, possimus perferendis molestiae accusamus ad! Illo debitis inventore provident fugiat?</p>;

export default function Page() {
  return <>
    <h1>Projects</h1>
    <main>
      <Bubble title="FTP client" content={lorem} />
      <Bubble title="Modélisation 3D" content={lorem} />
      <Bubble title="Serveur Web" content={lorem} />
      <Bubble title="Site web utilisation d'API" content={lorem} />
      <Bubble title="Système expert" content={lorem} />
      <Bubble title="Application Web de gestion de base de donnée" content={lorem} />
      <Bubble title="Site d'upload de fichier" content={lorem} />
      <Bubble title="DebtSwapper" content={lorem} />
    </main>
  </>
}