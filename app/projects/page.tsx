import styles from './page.module.css';
import {projects} from "./projects.json";

import {Project} from "@/types";

import {ArticleProject} from "@components/Article/ArticleProject/ArticleProject";
import {LinkList} from "@components/LinkList";
import {Bubble} from "@components/Bubble";


const projectsItems = projects.map((project: Project, index: number) => {
  return <ArticleProject key={index} project={project} />
});

export default function Page() {
  const projectLinkList = projects.map(({ name, slug }: { name: string, slug: string }) => ({label: name, slug: slug}));

  return <>
    <main className="container projects">
      <nav className={styles.projectList}>
        <Bubble className={styles.bubble}>
          <h2>Projects&nbsp;:</h2>
          <LinkList baseLink={"/projects"} links={projectLinkList}/>
        </Bubble>
      </nav>

      {projectsItems}
    </main>
  </>
}