import styles from "./opening.module.css";

export const metadata = {
  title: "Opening Study 01",
  robots: { index: false, follow: false }
};

export default function OpeningStudy() {
  return (
    <main className={styles.study} id="main-content">
      <div className={styles.frame}>
        <div className={styles.coordinate}>
          <span>OMAR KHAIR</span>
          <span>CREATIVE PRACTICE / 2026</span>
        </div>

        <div className={styles.statement}>
          <span className={styles.systems}>SYSTEMS</span>
          <span className={styles.with}>with a</span>
          <span className={styles.pulse}>pulse.</span>
        </div>

        <div className={styles.material} aria-hidden="true">
          <span className={styles.materialBody} />
          <span className={styles.materialGrid} />
          <span className={styles.materialFault} />
          <span className={styles.materialSignal} />
        </div>

        <p className={styles.practice}>
          ONE PRACTICE
          <br />
          CHANGING MATERIAL
        </p>

        <p className={styles.note}>
          image / body / sound / code / system
        </p>

        <div className={styles.entry}>
          <span>SCROLL / ENTER</span>
          <span>THE FIELD IS NOT BACKGROUND</span>
        </div>

        <div className={styles.index}>
          <span>OPENING STUDY</span>
          <span>01 / STATIC</span>
        </div>
      </div>
    </main>
  );
}
