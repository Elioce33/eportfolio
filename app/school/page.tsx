import {Bubble} from "@/app/components/bubble";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente delectus asperiores obcaecati hic exercitationem culpa temporibus debitis nisi voluptatem, possimus perferendis molestiae accusamus ad! Illo debitis inventore provident fugiat?";

export default function Page() {
  return <>
    <h1>School Career</h1>
    <main>
      <Bubble title="Licence Pro DA2I">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="DUT Informatique">
        <p>{lorem}</p>
      </Bubble>
      <Bubble title="Bac STI2D">
        <p>{lorem}</p>
      </Bubble>
    </main>
  </>
}