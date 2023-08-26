import styles from './Article.module.css';

export function Article({className = "", children}: any)  {
  return  <>
    <article className={`${styles.article_container} ${className}`}>
      <div className={`${styles.article_content} h-100`}>
        {children}
      </div>
    </article>
  </>
}