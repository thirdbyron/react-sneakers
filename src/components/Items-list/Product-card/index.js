import styles from './Product-card.module.scss';

console.log(styles)

export const ProductCard = (props) => {

  return (
    <article className={styles.productCard}>
      <div className={styles.wrapper}>
        <button className={`like-button ${styles.likeButton}`}>
          <img src="/img/favorite.svg" alt="to-favorite" className="icon icon_size_m" />
        </button>
        <img src={`/img/sneakers/${props.imgId}.jpg`} alt="Кроссовки" className={`product-img product-img_size_card ${styles.productImg}`} />
        <h5 className={styles.description}>{props.title}</h5>
        <div className={styles.bottomWrapper}>
          <div className={styles.priceWrapper}>
            <span className={styles.priceTitle}>Цена: </span>
            <b className={styles.price}>{props.price}</b>
          </div>
          <button className="cart-button" onClick={props.onClick}>
            <img src="/img/plus.svg" alt="to-cart" className="icon icon_size_s" />
          </button>
        </div>
      </div>
    </article>
  );
}


