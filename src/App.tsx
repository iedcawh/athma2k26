import styles from "./App.module.css";

export const App = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridBg} />
        <div className={styles.glowOrb} />

        <div className={styles.content}>
          <h1 className={styles.title} data-text="ATHMA">
            ATHMA
          </h1>

          <h2 className={styles.year}>Techfest 2026</h2>

          <p className={styles.tagline}>Where Technology Meets Its Soul.</p>

          <p className={styles.teaser}>⏳ The Signal Is Live. Stay Tuned.</p>
        </div>
      </div>
    </>
  );
};
