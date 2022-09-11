import styles from './CartItem.module.scss';

export const CartItem = () => {
  return (
    <article className={styles.cartItem}>
      <div className={styles.wrapper}>
        <img src="/img/sneakers/6.jpg" alt="Кроссовки" className={styles.productImg} />
        <div className={styles.middleWrapper}>
          <h5 className={styles.description}>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <b className={styles.price}>12050 ₽</b>
        </div>
        <button className="cart-button">
          <img src="/img/close.svg" alt="delete" className="icon icon_size_s" />
        </button>
      </div>
    </article>
  );
}