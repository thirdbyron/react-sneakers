import { CartItem } from "./Cart-item";
import styles from './Drawer.module.scss'

export const Drawer = () => {
  return (
    <div className={styles.drawer} aria-labelledby="drawer-cart-title" aria-describedby="drawer-cart-content" style={{display: 'none'}} >
        <dialog className={styles.modal}>
          <header className={styles.header}>
            <h2 className={styles.title} id="drawer-cart-title">Корзина</h2>
            <img src="/img/close.svg" alt="close" className={`icon ${styles.closeIcon}`} />
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
            <div className={`purchase ${styles.purchase}`}>
              <button className="purchase__button"> <span className="purchase__button-text">Оформить заказ</span> </button>
              <img src="/img/next-arrow.svg" alt="icon-arrow" className="icon icon_size_xl purchase__icon" />
            </div>
          </section>
        </dialog>
      </div>
  );
}