import styles from './CartItem.module.scss';

export const CartItem = ({ title, imgId, price }) => {
  return (
    <article className={styles.cartItem}>
      <div className={styles.wrapper}>
        <img src={`/img/sneakers/${imgId}.jpg`} alt="Кроссовки" className={styles.productImg} />
        <div className={styles.middleWrapper}>
          <h5 className={styles.description}>{title}</h5>
          <b className={styles.price}>{price}</b>
        </div>
        <button className="cart-button">
          <img src="/img/close.svg" alt="delete" className="icon icon_size_s" />
        </button>
      </div>
    </article>
  );
}