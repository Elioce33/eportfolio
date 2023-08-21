import {Bubble, BubbleProject} from "@/app/components/bubble";
import {projects} from "./projects.json";
import {Project} from "@/app/types";

const projectsItems = projects.map((project: Project, index:  number) => {
    return <BubbleProject key={index} project={project}/>
});

export default function Page() {
  return <>
    <h1>Projects</h1>
    <main className="projects">
      {projectsItems}
    </main>
  </>
}