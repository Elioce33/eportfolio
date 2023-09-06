import {Article} from "@components/Article/Article";
import {ArticleContract} from "@components/Article/ArticleContract/ArticleContract";

export function ArticleCompany({className = "", company}: any) {
  const {name, short_name, slug, description, address, contracts, company_url} = company;

  const contractItems = contracts.map((contract: any, idx: number) => {
    const {name, description, started_at, ended_at} = contract;
    return <ArticleContract key={idx} contract={contract} />
  });

  return <>
    <Article className={`company-${short_name} ${className}`}>
      <h2>{name}</h2>
      <p>{description}</p>

      <div>
        {contractItems}
      </div>


      <span>{address}</span>
      <span>For more informations : {company_url}</span> <br/>
    </Article>
  </>
}