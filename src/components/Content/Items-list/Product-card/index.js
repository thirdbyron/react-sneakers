import { useState } from 'react';
import styles from './Product-card.module.scss';


export const ProductCard = (props) => {

  const [isInCart, setIsInCart] = useState(false);
  const [isPlusHovered, setIsPlusHovered] = useState(false)

  const onAddToCart = () => {
    setIsInCart(!isInCart);
  }

  const onPlusHovered = () => {
    if (!isInCart) {
      setIsPlusHovered(!isPlusHovered);
    }
  }

  const onPlusLeaved = () => {
    setIsPlusHovered(false);
  }


  return (
    <article className={styles.productCard}>
      <div className={styles.wrapper}>
        <button
          className={`like-button ${styles.likeButton}`}
          onClick={props.onClickAddToFavorite}
        >
          <img src="/img/favorite.svg" alt="to-favorite" className="icon icon_size_m" />
        </button>
        <img src={`/img/sneakers/${props.imgId}.jpg`} alt="Кроссовки" className={`product-img product-img_size_card ${styles.productImg}`} />
        <h5 className={styles.description}>{props.title}</h5>
        <div className={styles.bottomWrapper}>
          <div className={styles.priceWrapper}>
            <span className={styles.priceTitle}>Цена: </span>
            <b className={styles.price}>{props.price}</b>
          </div>
          <button
            className="cart-button"
            onClick={onAddToCart}
            onMouseEnter={onPlusHovered}
            onMouseLeave={onPlusLeaved}
            style={isInCart || isPlusHovered ? { background: 'linear-gradient(180deg, #89F09C 0%, #3CC755 100%)' } : {}}
          >
            <img src={isInCart || isPlusHovered ? "/img/done.svg" : "/img/plus.svg"} alt="to-cart" className="icon icon_size_s" />
          </button>
        </div>
      </div>
    </article>
  );
}


