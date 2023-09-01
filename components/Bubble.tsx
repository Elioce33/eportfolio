import Link from "next/link";

export function Bubble({className = "", title, children}: any) {

  return <div className={`bubble_container ${className}`}>
    <div className={`bubble`}>
      <div className='bubble_content'>
        <div className="text">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  </div>;
}
