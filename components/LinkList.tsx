import Link from "next/link";


export function LinkList({className = "", title, baseLink, links,}: {
  className?: string,
  title?: string,
  baseLink?: string,
  links: {
    label: string,
    slug: string,
    blank?: boolean
  }[]
}) {
  return <>
    {title && <h2>{title}</h2>}
    <ul>
      {links.map(({label, slug, blank = false}: { label: string, slug: string, blank?: boolean }, index: number) => {
        const url = baseLink !== undefined ? `${baseLink}/${slug}` : slug;

        return <li key={index}>
          <Link href={url} target={blank ? "_blank" : ""}>{label}</Link>
        </li>
      })}
    </ul>
  </>;
}