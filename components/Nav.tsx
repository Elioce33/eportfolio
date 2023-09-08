import styles from './Nav.module.css';

import Link from "next/link";
import {Bubble} from "@components/Bubble";

export function SiteMap() {
  return <>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/projects">Projects</Link></li>
      <li><Link href="/school_career">School career</Link></li>
      <li><Link href="/works">Work experience</Link></li>
      <li><Link href="/recommendation">Recommendation</Link></li>
      <li><Link href="/knowledges">Knowledge</Link></li>
      <li><Link href="/hobbies">Hobbies</Link></li>
    </ul>
  </>
}


export function Nav() {
  return <nav className={styles.navigation}>
    <Bubble className={styles.bubble}>
      <h2 className={"text-center"}>Navigation</h2>
      <SiteMap/>
    </Bubble>
  </nav>;
}