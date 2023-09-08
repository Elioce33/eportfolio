import {SiteMap} from "@components/Nav";
import {LinkList} from "@components/LinkList";


export function Footer() {
  const links = [
    {label: "Github", slug: "https://github.com/elioce33", blank: true, icon: "bi bi-github"},
    {label: "Gitlab", slug: "https://gitlab.com/eliott.collin", blank: true, icon: "bi bi-gitlab"},
    {label: "Linkedin", slug: "https://www.linkedin.com/in/eliottcollin/", blank: true, icon: "bi bi-linkedin"},
    {label: "Mail", slug: "mailto:eliott.collin0307@gmail.com", blank: true, icon: "bi bi-envelope"},
    {label: "Téléphone", slug: "tel:+336 51 29 28 50", blank: true, icon: "bi bi-telephone"},
  ];

  return <footer>
    <div className={"container"}>
      <div className={"row text-start"}>
        <div className={"sitemap col"}>
          <h3 className={"h5"}>Sitemap</h3>
          <SiteMap/>
        </div>
        <div className={"link col"}>
          <h3 className={"h5"}>Contact</h3>
          <LinkList links={links}/>
        </div>
        <div className={"link col"}>
          <h3 className={"h5"}>Liens utiles</h3>
          <ul>
            <li><a href="/CV_Eliott_Collin.pdf" target={"_blank"}>CV_Eliott_Collin.pdf</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className={"copyright"}>
      copyright © 2023 - Eliott Collin
    </div>
  </footer>;
}