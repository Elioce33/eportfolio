import {Bubble} from "@/app/bubble";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente delectus asperiores obcaecati hic exercitationem culpa temporibus debitis nisi voluptatem, possimus perferendis molestiae accusamus ad! Illo debitis inventore provident fugiat?";

export default function Page() {
  return <>
    <h1>Eliott Collin</h1>
    <main>
      <Bubble title="Projects" content={lorem} />
      <Bubble title="School career" content={lorem} />
      <Bubble title="Work experience" content={lorem} />
      <Bubble title="Hobbies" content={lorem} />
    </main>
  </>
}