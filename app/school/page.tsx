import {Bubble} from "@/app/components/bubble";

export default function Page() {
  return <>
    <h1>School Career</h1>
    <main className="school">
      <Bubble title="Licence Pro DA2I">
        <p>Année obtention: 2023</p>
        <p>École: Université de Lille, Villeneuve d'Asq</p>
        <p>Mention: bien</p>
      </Bubble>
      <Bubble title="DUT Informatique">
        <p>Année obtention: 2022</p>
        <p>École: Université de Lille, Villeneuve d'Asq</p>
      </Bubble>
      <Bubble title="Bac STI2D">
        <p>Année obtention: 2018</p>
        <p>École: Lycée César Baggio, Lille</p>
        <p>Mention: bien</p>
        <p>Option: SIN <i>(Systèmes d'Information et Numérique)</i></p>
      </Bubble>
    </main>
  </>
}