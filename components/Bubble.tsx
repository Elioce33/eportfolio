import Link from "next/link";

export function Bubble({className = "", children}: any) {

  return <div className={`bubble_container ${className}`}>
    <div className={"bubble_wrapper"}>
      <div className="text">
          {children}
      </div>
    </div>
  </div>;
}
