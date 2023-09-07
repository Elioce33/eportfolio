import {Article} from "@components/Article/Article";
import {languages, knowledge, personal_competences} from "./knowledge.json";
import {ArticleLanguage} from "@components/Article/ArticleLanguage/ArticleLanguage";
import {ArticleKnowledge} from "@components/Article/ArticleKnowledge/ArticleKnowledge";


/*
I have some competences (with languages, frameworks, tools, ...)
frameworks is linked with languages
tools can be related to languages or/and frameworks
A competence can be a character trait (like "curious", "autonomous", "rigorous" or else)
*/


export default function Page() {
  const languagesItems = languages.map((language: any, idx: number) =>
    <div className={"col"}>
      <ArticleLanguage key={idx} language={language}/>
    </div>
  );
  const knowledgeItems = <>
    <div className={"col border border-dark"}>
      <h4>Concept</h4>
      <p>{knowledge.concept.comment}</p>
      <div className={"row"}>
        {knowledge.concept.items.map((concept: any, index: number) => {
          return <div className={"col"}>
            <ArticleKnowledge key={index} knowledge={concept}/>
          </div>
        })}
      </div>
    </div>
    <div className={"col border border-dark"}>
      <h4>tools</h4>
      <p>{knowledge.tools.comment}</p>
      <div className={"row"}>
        {knowledge.tools.items.map((tool: any, index: number) => {
          return <div className={"col"}>
            <ArticleKnowledge key={index} knowledge={tool}/>
          </div>
        })}
      </div>
    </div>
  </>
  const personalCompetencesItems = personal_competences.map((competence: any, index: number) => <></>);

  return <>
    <main className={"knowledge"}>
      <div>
        <h2>Compentences</h2>
        <div className={"container-fluid border border-success mb-4"}>
          <h3>Languages and their frameworks</h3>
          <div className={"row "}>
            {languagesItems}
          </div>
        </div>
        <div className={"container-fluid border border-danger mb-4"}>
          <h3>Knowledge</h3>
          <div className={"row border border-warning"}>
            {knowledgeItems}
          </div>
        </div>
        <div className={"container-fluid border border-info mb-4"}>
          <h3>Competences</h3>
          <div className={"row"}>
            {personal_competences.map((competence: any, index: number) => {
              return <div className={"col"}>
                <Article key={index}>
                  <h4>{competence.name}</h4>
                  <p>Niveau de connaissances: {competence.knowledge_level}</p>
                  <p>{competence.description}</p>
                </Article>
              </div>
            })}
          </div>
        </div>
      </div>
    </main>
  </>
}