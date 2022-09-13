import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import styles from './CartItem.module.scss';

export const CartItem = ({ title, imgId, price, id, productId, onDeleteProductFromCart, cartProducts }) => {

  const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(false)

  useEffect(() => {
    setIsDeleteButtonDisabled(false);
  }, [cartProducts])


  const handleDeleteItemCart = () => {
    setIsDeleteButtonDisabled(true);
    onDeleteProductFromCart({ title, imgId, price, id, productId });
  }

  return (
    <article className={styles.cartItem}>
      <div className={styles.wrapper}>
        <img
          src={`/img/sneakers/${imgId}.jpg`}
          alt="Кроссовки"
          className={styles.productImg}
        />
        <div className={styles.middleWrapper}>
          <h5 className={styles.description}>{title}</h5>
          <b className={styles.price}>{price}</b>
        </div>
        <button
          className="cart-button"
          onClick={handleDeleteItemCart}
          disabled={isDeleteButtonDisabled}
        >
          {isDeleteButtonDisabled ?
            <Icon icon="eos-icons:bubble-loading" width="20px" />
            :
            <img src="/img/close.svg" alt="delete" className="icon icon_size_s" />}
        </button>
      </div>
    </article>
  );
}