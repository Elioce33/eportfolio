"use client";

import {usePathname, useRouter} from "next/navigation";

import {Nav} from "@components/Nav";
import {useEffect, useState} from "react";


const DEFAULT_PAGE_TITLE = "Eliott Collin";
const pages = [
  // {label: "Eliott Collin", path: "/"}, // default page title
  {label: "Projects", path: "/projects"},
  {label: "School career", path: "/school_career"},
  {label: "Work experience", path: "/works"},
  {label: "My recommendations", path: "/recommendation"},
  {label: "Knowledge", path: "/knowledges"},
  {label: "Hobbies", path: "/hobbies"},
];

function getPageTitle(pathname: string) {
  const pageTitles = pages.filter(page => pathname.startsWith(page.path) );

  return pageTitles.length > 0 ? pageTitles[0].label : DEFAULT_PAGE_TITLE;
}

export function Header() {
  const pathname = usePathname()
  const [currentPageTitle, setCurrentPageTitle] = useState(getPageTitle(pathname));

  useEffect(() => {
    setCurrentPageTitle(getPageTitle(pathname));
  }, [pathname]);

  return <>
    <header>
      <Nav/>
      <h1>{currentPageTitle}</h1>
    </header>
  </>;
}