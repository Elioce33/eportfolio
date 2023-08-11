import {Bubble} from "@/app/components/bubble";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente delectus asperiores obcaecati hic exercitationem culpa temporibus debitis nisi voluptatem, possimus perferendis molestiae accusamus ad! Illo debitis inventore provident fugiat?";

export default function Page() {
  return <>
    <h1>Projects</h1>
    <main>
      <Bubble title="FTP client">
        <p>Client FTP développé en JAVA avec une interface en ligne de commandes</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Java</li>
          </ul>
        </div>
        <a href="https://gitlab.com/cours-dut-info/projects/ftp-client-java">View it on gitlab</a>
      </Bubble>
      <Bubble title="Modélisation 3D">
        <p>Logiciel de modélisation 3D, il est possible de lire des fichier .ply et afficher les objets 3D.</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Java</li>
            <li>JavaFX</li>
          </ul>
        </div>
        <a href="https://gitlab.com/cours-dut-info/projects/java-3d-modelization">View it on gitlab</a>
      </Bubble>
      <Bubble title="Serveur HTTP">
        <p>Server HTTP en C (langage)</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>C</li>
          </ul>
        </div>
        <a href="https://gitlab.com/cours-dut-info/projects/server-http">View it on gitlab</a>
      </Bubble>
      <Bubble title="Just Series">
        <p>Site web qui utilise l'api <a href="https://www.tvmaze.com/">tvmaze</a> pour afficher des séries. Il est possible de faire des recherche et d'ajouter certaines séries dans nos favoris (localement)</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <a href="https://gitlab.com/cours-dut-info/projects/just-series">View it on gitlab</a>
      </Bubble>
      <Bubble title="Système expert">
        <p>Système expert en Java</p>
        {/* todo : add more information*/}
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Java</li>
          </ul>
        </div>
        <a href="https://gitlab.com/cours-dut-info/projects/system-expert">View it on gitlab</a>
      </Bubble>
      <Bubble title="Application Web de gestion de base de donnée">
        <p>Le but de ce projet c'est de crée un site web qui permet d'afficher toute les table d'une base de donnée (H2/postgresql) et qui permet de faire les opératoin de base de SQL: Select, Update, Insert, Delete</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Java (Servlet)</li>
            <li>JDBC</li>
          </ul>
        </div>
        <a href="https://gitlab.com/cours-lp-da2i/ld03-web-backend-bdd/web/projet03">View it on gitlab</a>
      </Bubble>
      <Bubble title="Site d'upload de fichier">
        <p>Site web qui permet de se crée un compte et de télécharger des fichiers.</p>
        <div>
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Java/JEE</li>
            <li>JDBC</li>
            <li>JSP</li>
          </ul>
        </div>
        <a href="https://gitlab.com/cours-lp-da2i/ld03-web-backend-bdd/web/projet04">View it on gitlab</a>
      </Bubble>
      <Bubble title="DebtSwapper">
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
        <a href="https://gitlab.com/cours-lp-da2i/ld03-web-backend-bdd/web/debt-swapper">View it on gitlab</a> <br/>
        <a href="https://debtswapper.fishcorp.fr/">View it on live</a>
      </Bubble>
    </main>
  </>
}