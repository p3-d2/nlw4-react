import { useChallengeContext } from "../contexts/ChallengesContext";
import { useCountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useChallengeContext();
  const { resetCountdown } = useCountdownContext();

  function handleChallengeSuceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge.amount > 0 ? (
        <div className={styles.challengeActive}>
          <header>{activeChallenge.amount}</header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt={activeChallenge.type}
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSuceededButton}
              onClick={handleChallengeSuceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
