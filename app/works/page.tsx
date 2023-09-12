import {description, companies} from "./works.json";

import {ArticleCompany} from "@/components/Article/ArticleCompany/ArticleCompany";
import {BubbleSquare} from "@components/BubbleSquare";


const worksItems = companies.map((company, idx) => {
  return <ArticleCompany key={idx} company={company} />
});

export default function Page() {
  return <>
    <main>
      <BubbleSquare className={"page_description_bubble"}>
        <p>{description}</p>
      </BubbleSquare>
      {worksItems}
    </main>
  </>
}