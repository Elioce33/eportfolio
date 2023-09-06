import Link from "next/link";


export function LinkList({className = "", title, baseLink, links,}: {
  className?: string,
  title?: string,
  baseLink: string,
  links: { label: string, slug: string }[]
}) {
  return <>
    <h2>{title}</h2>
    <ul>
      {links.map(({label, slug}: { label: string, slug: string }, index: number) =>
        <li key={index}>
          <Link href={`${baseLink}/${slug}`}>{label}</Link>
        </li>
      )}
    </ul>
  </>;
}