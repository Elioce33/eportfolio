import {Bubble} from "@/app/components/bubble";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente delectus asperiores obcaecati hic exercitationem culpa temporibus debitis nisi voluptatem, possimus perferendis molestiae accusamus ad! Illo debitis inventore provident fugiat?";


const projectsLinksList = {
  ftp_client: [
    {href: "https://gitlab.com/cours-dut-info/projects/ftp-client-java", content: "View it on gitlab", target: "_blank"},
  ],
  java_3d_modelization: [
    {href: "https://gitlab.com/cours-dut-info/projects/java-3d-modelization", content: "View it on gitlab", target: "_blank"}
  ],
  server_http: [
    {href: "https://gitlab.com/cours-dut-info/projects/server-http", content: "View it on gitlab", target: "_blank"},
  ],
  just_series: [
    {href: "https://gitlab.com/cours-dut-info/projects/just-series", content: "View it on gitlab", target: "_blank"},
    {href: "http://justseries.fishcorp.fr", content: "View it on live", target: "_blank"},
  ],
  system_expert: [
    {href: "https://gitlab.com/cours-dut-info/projects/system-expert", content: "View it on gitlab", target: "_blank"},
  ],
  bdd_manager: [
    {href: "https://gitlab.com/cours-lp-da2i/ld03-web-backend-bdd/web/projet03", content: "View it on gitlab", target: "_blank"},
  ],
  file_upload: [
    {href: "https://gitlab.com/cours-lp-da2i/ld03-web-backend-bdd/web/projet04", content: "View it on gitlab", target: "_blank"},
  ],
  debt_swapper: [
    {href: "https://gitlab.com/cours-lp-da2i/ld03-web-backend-bdd/web/debt-swapper", content: "View it on gitlab", target: "_blank"},
    {href: "https://debtswapper.fishcorp.fr/", content: "View it on live", target: "_blank"},
  ],
};


export default function Page() {
  return <>
    <h1>Projects</h1>
    <main>
      <Bubble title="FTP client" information_links={projectsLinksList.ftp_client}>
        <p>Client FTP développé en JAVA avec une interface en ligne de commandes</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Java</li>
          </ul>
        </div>
      </Bubble>
      <Bubble title="Modélisation 3D" information_links={projectsLinksList.java_3d_modelization}>
        <p>Logiciel de modélisation 3D, il est possible de lire des fichier .ply et afficher les objets 3D.</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Java</li>
            <li>JavaFX</li>
          </ul>
        </div>
      </Bubble>
      <Bubble title="Serveur HTTP" information_links={projectsLinksList.server_http}>
        <p>Server HTTP en C (langage)</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>C</li>
          </ul>
        </div>
      </Bubble>
      <Bubble title="Just Series" information_links={projectsLinksList.just_series}>
        <p>Site web qui utilise l'api <a href="https://www.tvmaze.com/">tvmaze</a> pour afficher des séries. Il est possible de faire des recherche et d'ajouter certaines séries dans nos favoris (localement)</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </Bubble>
      <Bubble title="Système expert" information_links={projectsLinksList.system_expert}>
        <p>Système expert en Java</p>
        {/* todo : add more information*/}
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Java</li>
          </ul>
        </div>
      </Bubble>
      <Bubble title="Application Web de gestion de base de donnée" information_links={projectsLinksList.bdd_manager}>
        <p>Le but de ce projet c'est de crée un site web qui permet d'afficher toute les table d'une base de donnée (H2/postgresql) et qui permet de faire les opératoin de base de SQL: Select, Update, Insert, Delete</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Java (Servlet)</li>
            <li>JDBC</li>
          </ul>
        </div>
      </Bubble>
      <Bubble title="Site d'upload de fichier" information_links={projectsLinksList.file_upload}>
        <p>Site web qui permet de se crée un compte et de télécharger des fichiers.</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Java/JEE</li>
            <li>JDBC</li>
            <li>JSP</li>
          </ul>
        </div>
      </Bubble>
      <Bubble title="DebtSwapper" information_links={projectsLinksList.debt_swapper}>
        <p>
          Réalisation d'un site de partage des dépense (basé sur le fonctionnement de Tricount) <br/>
          Il y a de la gestion de compte et une base de donnée. Ainsi qu'une grosse partie Algorithmique pour calculer les dépenses.
        </p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Spring Boot</li>
            <li>Spring Security</li>
            <li>PostgreSQL/H2</li>
            <li>JSP</li>
          </ul>
        </div>
      </Bubble>
    </main>
  </>
}