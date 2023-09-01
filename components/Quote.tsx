import {Article} from "./Article/Article";

export function Quote({recommendation}: any) {
  const {from, contact, quote, company} = recommendation;

  return <Article className="w-75 m-auto">
    <figure className={"text-center"} style={{padding: "0 5rem"}}>
      <blockquote className={"blockquote"}>
        <p style={{whiteSpace: "pre-line"}}>
          {quote}
        </p>
      </blockquote>
      <figcaption className={"blockquote-footer"}>
        <a href={`mailto:${contact}`}>{from}</a> at <cite title={company}>{company}</cite>
      </figcaption>
    </figure>
  </Article>;
}