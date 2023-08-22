import {Bubble} from "@/components/bubble";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente delectus asperiores obcaecati hic exercitationem culpa temporibus debitis nisi voluptatem, possimus perferendis molestiae accusamus ad! Illo debitis inventore provident fugiat?";

export default function Page() {
  return <>
    <h1>Hobbies</h1>
    <main>
      <Bubble title="Photographie">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Lecture">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Nature">
        <p>{lorem}</p>
      </Bubble>
    </main>
  </>
}