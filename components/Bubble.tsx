import styles from './Bubble.module.css';

export function Bubble({className = "", children}: any) {

  return <div className={`${className}`}>
    <section className={styles.stage}>
      <figure className={`${styles.ball} ${styles.bubble}`}></figure>
    </section>


    <div className={styles.bubble_wrapper}>
      <div className={styles.text}>
          {children}
      </div>
    </div>
  </div>;
}
