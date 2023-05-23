import styles from "./styles.module.css";

export default function Spinner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["sk-chase"]}>
        <div className={styles["sk-chase-dot"]} />
        <div className={styles["sk-chase-dot"]} />
        <div className={styles["sk-chase-dot"]} />
        <div className={styles["sk-chase-dot"]} />
        <div className={styles["sk-chase-dot"]} />
        <div className={styles["sk-chase-dot"]} />
      </div>
    </div>
  );
}
