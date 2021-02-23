import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/components/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div style={{ border: "1px #ff0000 solid" }}>
          <Profile />
        </div>
        <div style={{ border: "1px #0000ff solid" }}></div>
      </section>
    </div>
  );
}
