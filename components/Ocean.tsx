import styles from './Ocean.module.scss';
import {Bubble} from "@components/Bubble";

export function Ocean() {
  return <div className={styles.ocean}>
    <Bubble className={`${styles.bubble} ${styles["size-10"]} ${styles["left-5"]}  ${styles["delay--15-duration-30"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-10"]} ${styles["left-40"]} ${styles["delay-5-duration-10"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-10"]} ${styles["left-60"]} ${styles["delay-0-duration-15"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-15"]} ${styles["left-95"]} ${styles["delay-10-duration-11"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-15"]} ${styles["left-40"]} ${styles["delay--5-duration-17"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-15"]} ${styles["left-45"]} ${styles["delay-4-duration-10"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-20"]} ${styles["left-30"]} ${styles["delay-1-duration-15"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-20"]} ${styles["left-50"]} ${styles["delay-3-duration-12"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-20"]} ${styles["left-65"]} ${styles["delay-15-duration-30"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-25"]} ${styles["left-10"]} ${styles["delay-5-duration-15"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-25"]} ${styles["left-35"]} ${styles["delay--9-duration-12"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-25"]} ${styles["left-90"]} ${styles["delay--11-duration-18"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-30"]} ${styles["left-25"]} ${styles["delay-10-duration-15"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-30"]} ${styles["left-80"]} ${styles["delay-9-duration-10"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-30"]} ${styles["left-70"]} ${styles["delay-8-duration-17"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-35"]} ${styles["left-15"]} ${styles["delay-0-duration-10"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-35"]} ${styles["left-10"]} ${styles["delay-1-duration-30"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-35"]} ${styles["left-55"]} ${styles["delay-10-duration-15"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-40"]} ${styles["left-20"]} ${styles["delay--5-duration-10"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-40"]} ${styles["left-75"]} ${styles["delay-10-duration-19"]}`}></Bubble>
    <Bubble className={`${styles.bubble} ${styles["size-40"]} ${styles["left-85"]} ${styles["delay-0-duration-25"]}`}></Bubble>
  </div>;
}
