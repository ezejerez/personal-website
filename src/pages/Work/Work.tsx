import React from "react";
import Carousel from "../../components/Carousel";
import { ClicOhLogo, KnownOnlineLogo } from "./companies";
import { PROJECTS } from "./projects";
import ProjectComponent from "./projects/ProjectsComponent/ProjectComponent";
import styles from "./styles.module.css";

export default function Work() {
  const itemProps = { fill: "#d4cec2" };

  return (
    <section className={styles.wrapper}>
      <h2>WORK</h2>

      <div className={styles.container}>
        <div className={styles["work-container"]}>
          <h3 className={styles.title}>Companies worked for</h3>

          <Carousel>
            <ClicOhLogo {...itemProps} />
            <KnownOnlineLogo {...itemProps} />
          </Carousel>
        </div>

        <div className={styles["work-container"]}>
          <h3 className={styles.title}>Projects</h3>
          <Carousel>
            {React.Children.toArray(
              PROJECTS.map((project) => {
                return <ProjectComponent project={project} />;
              })
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
