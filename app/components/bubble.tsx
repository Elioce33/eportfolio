import {BubbleLink} from "@/app/components/link";
import {Link} from "@/app/types";

export function Bubble({className = "", title, information_links, children}: any) {

    return <div className={`bubble_container ${className}`}>
        <div className='bubble'>
            <div className='bubble_content'>
                <h2>{title}</h2>
                {children}
                <br/>
                {information_links && information_links.map(
                    (link: Link, index: number) => <BubbleLink key={index} link={link}/>
                )}
            </div>
        </div>
    </div>;
}