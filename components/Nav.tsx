import Link from "next/link";
import {Bubble} from "@/components/Bubble";

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
    return <nav>
        <Bubble title="Navigation">
            <SiteMap />
        </Bubble>
    </nav>;
}