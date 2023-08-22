import {Bubble} from "@/components/bubble";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente delectus asperiores obcaecati hic exercitationem culpa temporibus debitis nisi voluptatem, possimus perferendis molestiae accusamus ad! Illo debitis inventore provident fugiat?";

export default function Page() {
  return <>
    <h1>Work Experiences</h1>
    <main>
      <Bubble title="Alternance BCD">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="CDD BCD">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Stage BCD">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Stage Sarbacane">
        <p>{lorem}</p>
      </Bubble>
    </main>
  </>
}