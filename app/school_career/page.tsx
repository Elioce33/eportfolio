import {Bubble} from "@/components/bubble";
import {certificates, schools} from "./school_career.json";


function BubbleSchoolCareer({certificate}: any) {
  const {degree, short_name, mention, description, dates, url, school_slug} = certificate;
  const school: any = schools.filter(school => school.slug === school_slug)[0];
  console.log(school);

  return <Bubble className="certificate_bubble" title={`${degree} (${dates.start} - ${dates.end})`}>
    <p>{school.name}, {school.address}</p>

    <h3>Formation</h3>
    {mention && <p>Mention : {mention}</p>}
    {description && <p>Description : {description}</p>}

    {url && <a href={url}
               target="_blank"
               aria-label={`Obtenez plus d'information sur la formation ${short_name}`}>Site de la formation</a>}
  </Bubble>
}

export default function Page() {
  const certificatesItems = certificates.map((certificate, index) =>
    <BubbleSchoolCareer key={index} certificate={certificate}/>
  );

  return <>
    <h1>School Career</h1>
    <main className="school_career">
      {certificatesItems}
    </main>
  </>
}
