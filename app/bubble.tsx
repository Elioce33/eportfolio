export function Bubble({title, content}: any) {
    return <article className='bubble'>
        <div className='bubble_content'>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </article>;
}