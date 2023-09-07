import styles from './Bubble.module.css';

export function Bubble({className = "", children}: any) {

  return <div className={`bubble_container ${className}`}>
    <div className={styles.bubble_wrapper}>
      <div className={styles.text}>
          {children}
      </div>
    </div>
  </div>;
}
