import {SiteMap} from "@components/Nav";
import {LinkList} from "@components/LinkList";


export function Footer() {
  const links = [
    {label: "Github", slug: "https://github.com/elioce33", blank: true},
    {label: "Gitlab", slug: "https://gitlab.com/eliott.collin", blank: true},
    {label: "Linkedin", slug: "https://www.linkedin.com/in/eliottcollin/", blank: true},
  ];

  return <footer>
    <div className={"container"}>
      <div className={"row text-start"}>
        <div className={"sitemap col"}>
          <h3 className={"h5"}>Sitemap</h3>
          <SiteMap/>
        </div>
        <div className={"link col"}>
          <h3 className={"h5"}>Utils links</h3>
          <LinkList links={links}/>
        </div>
      </div>
    </div>
    <div className={"copyright"}>
      copyright © 2023 - Eliott Collin
    </div>
  </footer>;
}