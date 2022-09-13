import { MainButton } from "../generic/MainButton";
import { CartItem } from "./CartItem";
import { TAX_RATE } from "../../const";
import styles from './Drawer.module.scss'
import { EmptySection } from "../generic/EmptySection";

export const Drawer = ({ onClose, cartProducts, cartSum, onDeleteProductFromCart }) => {

  const onClickedOutClose = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose(false);
    }
  };

  const renderCartItems = () => cartProducts.map((product) =>
    <CartItem
      key={product.id}
      {...product}
      onDeleteProductFromCart={onDeleteProductFromCart}
      cartProducts={cartProducts}
    />);


  console.log(cartProducts)

  return (
    <div className={styles.drawer} onClick={onClickedOutClose}>
      <dialog className={styles.modal} aria-labelledby="drawer-cart-title" aria-describedby="drawer-cart-content">
        <header className={styles.header}>
          <h2 className={styles.title} id="drawer-cart-title">Корзина</h2>
          <img src="/img/close.svg" alt="close" className={`icon ${styles.closeIcon}`} onClick={() => onClose(false)} />
        </header>
        {cartProducts.length > 0 ?
          <>
            <section className={styles.itemsList} id="drawer-cart-content">
              {
                renderCartItems()
              }
            </section>
            <section className={styles.cartDetails}>
              <div className={styles.detail}>
                <span className={styles.detailText}>Итого: </span>
                <span className={styles.detailLine}></span>
                <b className={styles.detailPrice}> {`${cartSum} руб.`} </b>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailText}>Налог 5%: </span>
                <span className={styles.detailLine}> </span>
                <b className={styles.detailPrice}> {`${Math.floor(cartSum * TAX_RATE)} руб.`}  </b>
              </div>
              <MainButton buttonText="Оформить заказ" />
            </section>
          </>
          : <EmptySection
            onClose={onClose}
            imgType="cart"
            title="Корзина пуста"
            description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            position={{padding: "0px 30px 60px 30px"}}
            linkTo={null}
          />
        }
      </dialog>
    </div>
  );
}