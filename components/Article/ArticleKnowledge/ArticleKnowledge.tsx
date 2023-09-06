import {Article} from "@components/Article/Article";

export function ArticleKnowledge({className = "", knowledge}: any) {
  const {name, slug, knowledge_level, comment, tools} = knowledge;

  const toolsItems = tools.map((tool: any, index: number) => {
    return <li>
      <Article key={index}>
        <h5>{tool.name}</h5>
        <p>Niveau de connaissances: {tool.knowledge_level}</p>
        <p>{tool.description}</p>
      </Article>
    </li>
  });

  const content = <>
    <h4>{name}</h4>
    <p>Niveau de connaissances: {knowledge_level}</p>
    <p>{comment}</p>
    <div>
      {tools && tools.length > 0 && <>
          <h5>Tools</h5>
          <ul>{toolsItems}</ul>
      </>}
    </div>
  </>;

  return <>
    <Article className={`language-${slug} ${className}`}>
      {content}
    </Article>
  </>
}