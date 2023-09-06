import {Article} from "@components/Article/Article";

export function ArticleLanguage({className = "", language}: any) {
  const {name, slug, knowledge_level, comment, frameworks} = language;

  const frameworksItems = frameworks.map((framework: any, index: number) => {
    return <li key={index}>
      <Article>
        <h5>{framework.name}</h5>
        <p>Niveau de connaissances: {framework.knowledge_level}</p>
        <p>{framework.description}</p>
      </Article>
    </li>
  });

  const content = <>
    <div className={"row"}>
      <div className={"col"}>
        <h4>{name}</h4>
      </div>
      <div className={"col"}>
        {/*logo here*/}
      </div>
    </div>
    <p>Niveau de connaissances: {knowledge_level}</p>
    <p>{comment}</p>
    <div>
      {frameworks && frameworks.length > 0 && <>
          <h5>Frameworks</h5>
          <ul>{frameworksItems}</ul>
      </>}
    </div>
  </>;

  return <>
    <Article className={`language-${slug} ${className}`}>
      {content}
    </Article>
  </>
}