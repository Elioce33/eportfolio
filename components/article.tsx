export function Article({className = "", children}: any)  {
  return  <>
    <article className={`article_container ${className}`}>
      <div className="article_content h-100">
        {children}
      </div>
    </article>
  </>
}