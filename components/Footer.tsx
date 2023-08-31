import {SiteMap} from "@components/Nav";

export function Footer() {
    return <footer>
        <div className={"container"}>
            <div className={"row text-start"}>
                <div className={"sitemap col"}>
                    <h3 className={"h5"}>Sitemap</h3>
                    <SiteMap />
                </div>
                <div className={"link col"}>
                    <h3 className={"h5"}>Utils links</h3>
                    <ul>
                        <li>
                            <a href={""}>Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={"copyright"}>
            copyright © 2023 - Eliott Collin
        </div>
    </footer>;
}