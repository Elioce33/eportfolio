import styles from './Ocean.module.css';

export function Ocean() {
  return <div className={styles.ocean}>
    <div className={`${styles.bubble} ${styles["bubble--1"]}`}></div>
    <div className={`${styles.bubble} ${styles["bubble--2"]}`}></div>
    <div className={`${styles.bubble} ${styles["bubble--3"]}`}></div>
    <div className={`${styles.bubble} ${styles["bubble--4"]}`}></div>
    <div className={`${styles.bubble} ${styles["bubble--5"]}`}></div>
    <div className={`${styles.bubble} ${styles["bubble--6"]}`}></div>
    <div className={`${styles.bubble} ${styles["bubble--7"]}`}></div>
    <div className={`${styles.bubble} ${styles["bubble--8"]}`}></div>
    <div className={`${styles.bubble} ${styles["bubble--9"]}`}></div>
    <div className={`${styles.bubble} ${styles["bubble--10"]}`}></div>
    <div className={`${styles.bubble} ${styles["bubble--11"]}`}></div>
    <div className={`${styles.bubble} ${styles["bubble--12"]}`}></div>
  </div>;
}
