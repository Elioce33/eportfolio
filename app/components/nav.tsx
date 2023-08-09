import {Bubble} from "@/app/components/bubble";
export function Nav() {
    return <nav>
        <Bubble title="Navigation">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/school">School career</a></li>
            <li><a href="/work">Work experience</a></li>
            <li><a href="/hobbies">Hobbies</a></li>
        </ul>
        </Bubble>
    </nav>;
}