import styles from './MainButton.module.scss';

export const MainButton = ({buttonText, mod = null}) => {
  return (
    <div className={`${styles.purchase} ${mod ? styles.purchaseMod : ''}`}>
      {mod ? <img src="/img/next-arrow.svg" alt="icon-arrow" className={`icon icon_size_xl ${styles.iconLeft}`} /> : ''}
      <button className={styles.button}>
        <span className={styles.buttonText}>{buttonText}</span>
      </button>
      {mod ? '' : <img src="/img/next-arrow.svg" alt="icon-arrow" className={`icon icon_size_xl ${styles.iconRight}`} />}
    </div>
  );
}