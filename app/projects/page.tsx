import {ArticleProject} from "@components/Article/ArticleProject/ArticleProject";
import {projects} from "./projects.json";
import {Project} from "@/types";

const projectsItems = projects.map((project: Project, index: number) => {
  return <ArticleProject key={index} project={project} />
});

export default function Page() {
  return <>
    <h1>Projects</h1>
    {/* insert a nav menu for this page */}
    <main className="projects">
      {projectsItems}
    </main>
  </>
}