import styles from "./styles.module.css";

export default function Main() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>EZEQUIEL JEREZ</h2>
        <p className={styles.text} style={{ fontSize: "clamp(30px, 1.5vw, 25px)" }}>
          ...
        </p>
        <h3 className={styles.text} style={{ fontSize: "clamp(14px, 1.3vw, 30px)" }}>
          Software Engineer & Full Stack Developer
        </h3>
      </div>
    </section>
  );
}
