import styles from './BubbleSquare.module.css';

export function BubbleSquare({className = "", children}: any) {
  return <div className={`${className} ${styles.bubbleSquare}`}>
    {children}
  </div>;
}