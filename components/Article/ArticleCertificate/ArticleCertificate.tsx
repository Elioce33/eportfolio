import {Article} from "@components/Article/Article";


export function ArticleCertificate({className = "", certificate}: any) {
  const {degree, short_name, mention, description, dates, url, school_slug} = certificate;

  const content = <>
    <h3>Formation: {degree}</h3>
    {mention && <p>Mention : {mention}</p>}
    {description && <p>Description : {description}</p>}

    {url && <a href={url}
               target="_blank"
               aria-label={`Obtenez plus d'information sur la formation ${short_name}`}>Site de la formation</a>}
  </>

  return <>
    <Article className={`school-${short_name} ${className}`}>
      {content}
    </Article>
  </>
}