import {ArticleCompany} from "@/components/Article/ArticleCompany/ArticleCompany";
import {description, companies} from "./works.json";

const worksItems = companies.map((company, idx) => {
  return <ArticleCompany key={idx} company={company} />
});

export default function Page() {
  return <>
    <main>
      <p>{description}</p>
      {worksItems}
    </main>
  </>
}