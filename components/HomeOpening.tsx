import HomeOpeningField from "./HomeOpeningField";
import styles from "./HomeOpening.module.css";

export default function HomeOpening() {
  return (
    <section className={styles.opening} aria-labelledby="home-opening-title">
      <HomeOpeningField />

      <div className={styles.frame}>
        <h1 className={styles.title} id="home-opening-title">
          <span className={styles.systems}>SYSTEMS</span>
          <span className={styles.human}>
            with a <em>pulse.</em>
          </span>
        </h1>

        <p className={styles.scrollCue} aria-hidden="true">
          <span>SCROLL</span>
          <span className={styles.scrollLine} />
        </p>
      </div>
    </section>
  );
}
