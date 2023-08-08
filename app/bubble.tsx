export function Bubble({title, content, link}: any) {
    return <article className='bubble'>
        <div className='bubble_content'>
            <h2>{title}</h2>
            {content}
            <br/>
            {link && <a href={link}>see more</a>}
        </div>
    </article>;
}