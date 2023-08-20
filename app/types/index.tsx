export interface Link {
    href: string,
    content: string | "see more..."
    target: "_blank" | "_self" | "_parent" | "_top"
}