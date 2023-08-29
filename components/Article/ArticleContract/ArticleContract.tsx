import {Article} from "@components/Article/Article";

function ProjectCard({project}: any) {
  const {name, description, client} = project;
  return <>
    <div className={"col-4 mx-auto"}>
      <div className={"card"}>
        <div className="card-header">
          <h4>{name}</h4>
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
        <div className="card-footer text-body-secondary">
          {client}
        </div>
      </div>
    </div>
  </>
}

export function ArticleContract({className = "", contract}: any) {
  const {name, job, duration, started_at, ended_at, description, projects} = contract;

  const projectItems = projects.map((project: any, idx: number) => <ProjectCard project={project} />);

  return <>
    <Article className={`${className}`}>
      <div className={"row"}>
        <div className={"col-8"}>
          <h3>{name}</h3>
          Poste : {job} <br/>
        </div>
        <div className={"col-4"}>
          <span>{duration}</span> <br/>
          <span>{started_at} - {ended_at}</span> <br/>
        </div>
        <div className={"mt-3"}>
          <p>{description}</p>
        </div>
        <div className={"row"}>
          {projectItems}
        </div>
      </div>

    </Article>
  </>
}