import {Bubble} from "@/components/Bubble";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente delectus asperiores obcaecati hic exercitationem culpa temporibus debitis nisi voluptatem, possimus perferendis molestiae accusamus ad! Illo debitis inventore provident fugiat?";

export default function Page() {
    return <>
        <h1>Knowledge</h1>
        <main>
            <Bubble title="Languages">
                <p>{lorem}</p>
            </Bubble>
            <Bubble title="Frameworks">
                <p>{lorem}</p>
            </Bubble>
            <Bubble title="Tools">
                <p>{lorem}</p>
            </Bubble>
        </main>
    </>
}