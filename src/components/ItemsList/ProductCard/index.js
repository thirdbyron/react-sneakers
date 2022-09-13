import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import styles from './ProductCard.module.scss';


export const ProductCard = ({ title, imgId, price, id, onAddProductToCart, cartProducts, onAddToFavorite, favoriteProducts }) => {

  const [isInCart, setIsInCart] = useState(false);
  const [isPlusButtonDisabled, setIsPlusButtonDisabled] = useState(false)
  const [isPlusHovered, setIsPlusHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHeartButtonDisabled, setIsHeartButtonDisabled] = useState(false);
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  useEffect(() => {
    if (cartProducts.some((product) => product.productId === id)) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
    setIsPlusButtonDisabled(false);
  }, [cartProducts, id]);

  useEffect(() => {
    if (favoriteProducts.some((product) => product.productId === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
    setIsHeartButtonDisabled(false);
  }, [favoriteProducts, id])


  const onAddToCart = () => {
    setIsPlusHovered(false);
    setIsPlusButtonDisabled(true);
    onAddProductToCart({ title, imgId, price, productId: id });
  }

  const onPlusHovered = () => {
    if (!isInCart) {
      setIsPlusHovered(!isPlusHovered);
    }
  }

  const onPlusLeaved = () => {
    setIsPlusHovered(false);
  }

  const onAddProductToFavorite = () => {
    setIsHeartHovered(false);
    setIsHeartButtonDisabled(true);
    onAddToFavorite({ title, imgId, price, productId: id });
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
          onClick={onAddProductToFavorite}
          onMouseEnter={onHeartHovered}
          onMouseLeave={onHeartLeaved}
          disabled={isHeartButtonDisabled}
        >
          {isHeartButtonDisabled
            ? <Icon icon="eos-icons:bubble-loading" width="20px" />
            : <img
              src={isFavorite ? "/img/favorite-filled.svg" : "/img/favorite.svg"}
              alt="to-favorite"
              className="icon icon_size_m"
            />}

        </button>
        <img
          src={`/img/sneakers/${imgId}.jpg`}
          alt="Кроссовки"
          className={`product-img product-img_size_card ${styles.productImg}`}
        />
        <h5 className={styles.description}>{title}</h5>
        <div className={styles.bottomWrapper}>
          <div className={styles.priceWrapper}>
            <span className={styles.priceTitle}>Цена: </span>
            <b className={styles.price}>{price}</b>
          </div>
          <button
            className={`cart-button ${isInCart || isPlusHovered ? "cart-button_hovered" : ""}`}
            onClick={onAddToCart}
            onMouseEnter={onPlusHovered}
            onMouseLeave={onPlusLeaved}
            disabled={isPlusButtonDisabled}
          >
            {isPlusButtonDisabled
              ? <Icon icon="eos-icons:bubble-loading" width="20px" />
              : <img
                src={isInCart ? "/img/done.svg" : "/img/plus.svg"}
                alt="to-cart"
                className="icon icon_size_s"
              />}

          </button>
        </div>
      </div>
    </article>
  );
}


