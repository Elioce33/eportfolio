import Link from "next/link";

export function BubbleLink({link}: any) {
    return <div>
        <Link href={link.href} target={link.target || "_self"}>{link.content || "see more..."}</Link>
    </div>;
}