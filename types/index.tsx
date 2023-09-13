interface Link {
    name: string,
    url: string
}

export interface Project {
    name: string,
    slug: string,
    description: string,
    languages: (string | {name: string, slug : string})[],
    technologies: (string | {name: string, slug : string})[],
    links: Link[]
}