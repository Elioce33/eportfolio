import {ArticleSchool} from "@/components/article.school";
import {ArticleCertificate} from "@components/article.certificate";
import {certificates, schools} from "./school_career.json";


export default function Page() {
  const schoolItems = schools.map((school, school_index) => {
    const certificatesItems = certificates.filter((certificate: any) => certificate.school_slug === school.slug)
      .map((certificate: any, certificate_index: number) => {
        console.log("certificate", certificate);
        return <ArticleCertificate key={certificate_index} certificate={certificate}>
          {certificate}
        </ArticleCertificate>
      });

    return <ArticleSchool key={school_index} school={school}>
      {certificatesItems}
    </ArticleSchool>
    });


  return <>
    <h1>School Career</h1>
    <main className="school_career">
      {schoolItems}
    </main>
  </>
}
