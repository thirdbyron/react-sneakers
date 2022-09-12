import { PurchaseButton } from "../PurchaseButton";
import { CartItem } from "./CartItem";
import { TAX_RATE } from "../../const";
import styles from './Drawer.module.scss'

export const Drawer = ({ onClose, cartProducts, cartSum }) => {

  const onClickedOutClose = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose(false);
    }
  };

  const renderCartItems = () => cartProducts.map((product) =>
    <CartItem
      key={product.imgId}
      title={product.title}
      imgId={product.imgId}
      price={product.price}
    />);

  return (
    <div className={styles.drawer} onClick={onClickedOutClose}>
      <dialog className={styles.modal} aria-labelledby="drawer-cart-title" aria-describedby="drawer-cart-content">
        <header className={styles.header}>
          <h2 className={styles.title} id="drawer-cart-title">Корзина</h2>
          <img src="/img/close.svg" alt="close" className={`icon ${styles.closeIcon}`} onClick={() => onClose(false)} />
        </header>
        <section className={styles.itemsList} id="drawer-cart-content">
          {
            renderCartItems()
          }
        </section>
        <section className={styles.cartDetails}>
          <div className={styles.detail}>
            <span className={styles.detailText}>Итого: </span>
            <span className={styles.detailLine}></span>
            <b className={styles.detailPrice}> {cartSum > 0 ? `${cartSum} руб.` : '0 руб.'} </b>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailText}>Налог 5%: </span>
            <span className={styles.detailLine}> </span>
            <b className={styles.detailPrice}> {cartSum > 0 ? `${Math.floor(cartSum * TAX_RATE)} руб.` : '0 руб.'}  </b>
          </div>
          <PurchaseButton />
        </section>
      </dialog>
    </div>
  );
}