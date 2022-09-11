import { useState } from 'react';
import styles from './Product-card.module.scss';


export const ProductCard = (props) => {

  const [isInCart, setIsInCart] = useState(false);
  const [isPlusHovered, setIsPlusHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHeartHovered, setIsHeartHovered] = useState(false);

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

  const onAddToFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  const onHeartHovered = () => {
    if (!isFavorite) {
      setIsHeartHovered(!isHeartHovered);
    }
  }

  const onHeartLeaved = () => {
      setIsHeartHovered(false);
  }


  return (
    <article className={styles.productCard}>
      <div className={styles.wrapper}>
        <button
          className={`like-button ${styles.likeButton} ${isFavorite || isHeartHovered ? "like-button_hovered" : ""}`}
          onClick={onAddToFavorite}
          onMouseEnter={onHeartHovered}
          onMouseLeave={onHeartLeaved}
        >
          <img src={isFavorite ? "/img/favorite-filled.svg" : "/img/favorite.svg"} alt="to-favorite" className="icon icon_size_m" />
        </button>
        <img src={`/img/sneakers/${props.imgId}.jpg`} alt="Кроссовки" className={`product-img product-img_size_card ${styles.productImg}`} />
        <h5 className={styles.description}>{props.title}</h5>
        <div className={styles.bottomWrapper}>
          <div className={styles.priceWrapper}>
            <span className={styles.priceTitle}>Цена: </span>
            <b className={styles.price}>{props.price}</b>
          </div>
          <button
            className={`cart-button ${isInCart || isPlusHovered ? "cart-button_hovered" : ""}`}
            onClick={onAddToCart}
            onMouseEnter={onPlusHovered}
            onMouseLeave={onPlusLeaved}
          >
            <img src={isInCart ? "/img/done.svg" : "/img/plus.svg"} alt="to-cart" className="icon icon_size_s" />
          </button>
        </div>
      </div>
    </article>
  );
}


