import { MainButton } from '../../MainButton';
import styles from './EmptyCart.module.scss';

export const EmptyCart = ({ onClose }) => {
  return (
    <section className={styles.emptyCart}>
      <img src="/img/empty-cart.jpg" alt="Empty cart" />
      <h4 className={styles.title}> Корзина пустая </h4>
      <p className={styles.description}> Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ. </p>
      <div className={styles.backButton} onClick={() => onClose(false)}>
      <MainButton buttonText="Вернуться назад" mod={true} />
      </div>
    </section>
  );
}