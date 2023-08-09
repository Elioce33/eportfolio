export function Bubble({title, link, children}: any) {
    return <article className='bubble'>
        <div className='bubble_content'>
            <h2>{title}</h2>
            {children}
            <br/>
            {link && <a href={link}>see more</a>}
        </div>
    </article>;
}