import {ArticleProject} from "@/components/article.project";
import {projects} from "./projects.json";
import {Project} from "@/types";

const projectsItems = projects.map((project: Project, index: number) => {
  return <ArticleProject key={index} project={project} />
});

export default function Page() {
  return <>
    <h1>Projects</h1>
    <main className="projects">
      {projectsItems}
    </main>
  </>
}