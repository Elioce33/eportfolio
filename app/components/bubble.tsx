export function Bubble({className = "", title, link, children}: any) {
    return <div className={`bubble_container ${className}`}>
        <div className='bubble'>
            <div className='bubble_content'>
                <h2>{title}</h2>
                {children}
                <br/>
                {link && <a href={link}>see more</a>}
            </div>
        </div>
    </div>;
}