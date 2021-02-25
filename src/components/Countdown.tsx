import { useCountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useCountdownContext();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.CountdownButton}>
          <span>Ciclo encerrado</span>
          <img src="icons/circle_check.svg" alt="completed" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.CountdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <img src="icons/close.svg" alt="close" />
              <img src="icons/close_white.svg" alt="close" />
            </button>
          ) : (
            <button
              type="button"
              className={styles.CountdownButton}
              onClick={startCountdown}
            >
              Iniciar ciclo
              <img src="icons/play_arrow.svg" alt="arrow" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
