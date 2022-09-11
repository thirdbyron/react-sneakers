import styles from './PurchaseButton.module.scss';

export const PurchaseButton = () => {
  return (
    <div className={styles.purchase}>
      <button className={styles.button}>
        <span className={styles.buttonText}>Оформить заказ</span>
      </button>
      <img src="/img/next-arrow.svg" alt="icon-arrow" className={`icon icon_size_xl ${styles.icon}`} />
    </div>
  );
}