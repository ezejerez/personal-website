import ContactForm from "../../components/ContactForm/ContactForm";
import { GitHubIcon, LinkedInIcon } from "./icons";
import styles from "./styles.module.css";

export default function Contact() {
  const iconProps = { bgColor: "#D4CEC2", fill: "#262C35", size: 50 };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>CONTACT</h2>

      <ContactForm />

      <div className={styles["social-media-container"]}>
        <LinkedInIcon {...iconProps} />
        <GitHubIcon {...iconProps} />
      </div>
    </section>
  );
}
