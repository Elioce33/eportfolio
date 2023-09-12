import {Quote} from "@/components/Quote";
import {recommendations} from "./quotes.json";

const quotesItems = recommendations.map((recommendation, idx) => {
  return <Quote key={idx} recommendation={recommendation} />
});

export default function Page() {
  return <>
    <main>
      {quotesItems}
    </main>
  </>
}