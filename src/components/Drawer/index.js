import { PurchaseButton } from "../PurchaseButton";
import { CartItem } from "./CartItem";
import styles from './Drawer.module.scss'

export const Drawer = (props) => {

  const onClickedOutClose = (evt) => {
    if (evt.currentTarget === evt.target) {
      props.onClose(false);
    }
  }

  return (
    <div className={styles.drawer} onClick={onClickedOutClose}>
      <dialog className={styles.modal} aria-labelledby="drawer-cart-title" aria-describedby="drawer-cart-content">
        <header className={styles.header}>
          <h2 className={styles.title} id="drawer-cart-title">Корзина</h2>
          <img src="/img/close.svg" alt="close" className={`icon ${styles.closeIcon}`} onClick={() => props.onClose(false)} />
        </header>
        <section className={styles.itemsList} id="drawer-cart-content">
          <CartItem />
        </section>
        <section className={styles.cartDetails}>
          <div className={styles.detail}>
            <span className={styles.detailText}>Итого: </span>
            <span className={styles.detailLine}></span>
            <b className={styles.detailPrice}> 9860 ₽ </b>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailText}>Налог 5%: </span>
            <span className={styles.detailLine}> </span>
            <b className={styles.detailPrice}> 1074 ₽ </b>
          </div>
          <PurchaseButton />
        </section>
      </dialog>
    </div>
  );
}