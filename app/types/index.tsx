interface Link {
    name: string,
    url: string
}

export interface Project {
    name: string,
    slug: string,
    description: string,
    presentation: string,
    languages: string[],
    technologies: string[],
    links: Link[]
}