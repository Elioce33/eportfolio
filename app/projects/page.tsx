import {ArticleProject} from "@components/Article/ArticleProject/ArticleProject";
import {projects} from "./projects.json";
import {Project} from "@/types";
import {LinkList} from "@components/LinkList";

const projectsItems = projects.map((project: Project, index: number) => {
  return <ArticleProject key={index} project={project} />
});

export default function Page() {
  const projectLinkList = projects.map(({ name, slug }: { name: string, slug: string }) => ({label: name, slug: slug}));

  return <>
    <main className="projects">
      <nav className={"projectList"}>
        <LinkList title={"Projects :"} baseLink={"/projects"} links={projectLinkList}/>
      </nav>

      {projectsItems}
    </main>
  </>
}