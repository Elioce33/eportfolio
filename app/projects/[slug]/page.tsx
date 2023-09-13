import styles from "@/app/projects/page.module.css";

import {projects} from "../projects.json";

import Link from "next/link";
import {LinkList} from "@components/LinkList";
import {Bubble} from "@components/Bubble";
import {Project} from "@components/Project";


export default function Page({ params }: { params: { slug: string } }) {
  const projectLinkList = projects.map(({ name, slug }: { name: string, slug: string }) => ({label: name, slug: slug}));

  return <main className="project container-fuild p-3">
    <nav className={styles.projectList}>
      <Bubble className={styles.bubble}>
        <h2>Projects&nbsp;:</h2>
        <LinkList baseLink={"/projects"} links={projectLinkList}/>
      </Bubble>
    </nav>

    <Project project_slug={params.slug} />;

    <Link href="/projects">Back to Projects</Link>
  </main>
}