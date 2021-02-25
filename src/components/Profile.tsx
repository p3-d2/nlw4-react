import { useChallengeContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useChallengeContext();

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pedro-frontend.png" alt="Pedro Henrique" />
      <div>
        <strong>Pedro Henrique</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
