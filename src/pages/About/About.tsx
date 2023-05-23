import styles from "./styles.module.css";

export default function About() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>ABOUT</h2>

      <p className={styles.text}>
        <strong>Software Engineer & Full Stack Developer</strong> with extensive experience in designing <strong>web/mobile applications</strong>, both for
        clients and for my own projects.
        <br />
        Specialized in <strong>React/React Native</strong>, <strong>Typescript</strong> and <strong>NodeJS</strong>.
        <br />
        <br />
        I am passionate about my profession, continuously learning new things and applying the knowledge acquired to help others.
        <br />I am highly motivated to contribute with my capabilities to design solutions for challenging projects that allow me to broaden my views and
        enhance my skills.
      </p>

      <a href="/resume.pdf" download="Ezequiel Jerez - Software Engineer & Full Stack Developer">
        <button className={styles.button}>GET MY RESUME</button>
      </a>
    </section>
  );
}
