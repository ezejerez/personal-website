import styles from "./styles.module.css";

export default function About() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>ABOUT</h2>

      <p className={styles.text}>
        As an <strong>IT professional</strong> with 3+ years of experience, I have had the opportunity to work with multiple companies,
        ranging from established enterprises to innovative start-ups, where I have played a significant role in{" "}
        <strong>designing web applications</strong>.
        <br />
        <br />
        My expertise lies in <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Node.js</strong>/<strong>NestJS</strong>,
        enabling me to create robust and efficient solutions.
        <br />
        <br />I am passionate about using my knowledge to make a positive impact and contribute to projects that have a meaningful influence
        on the world.
      </p>

      <a href="/resume.pdf" download="Ezequiel Jerez - Software Engineer & Full Stack Developer">
        <button className={styles.button}>GET MY RESUME</button>
      </a>
    </section>
  );
}
