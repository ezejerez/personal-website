import { Project } from "..";
import styles from "./styles.module.css";

interface ProjectComponentProps {
  project: Project;
}

export default function ProjectComponent({ project }: ProjectComponentProps) {
  const { img, name, technologies, projectUrl, projectCode } = project;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={img} alt={name} className={styles.image} />
        <h3 className={styles.title}>{name}</h3>

        <p className={styles.technologies}>{technologies}</p>

        <div className={styles["buttons-container"]}>
          {projectUrl && (
            <a href={projectUrl} target="_blank">
              <button className={styles.button}>Project</button>
            </a>
          )}

          {projectCode && (
            <a href={projectCode} target="_blank">
              <button className={styles.button}>Code</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
