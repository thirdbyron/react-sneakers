import { MainButton } from "../generic/MainButton";
import { CartItem } from "./CartItem";
import { TAX_RATE } from "../../const";
import styles from './Drawer.module.scss'
import { EmptySection } from "../generic/EmptySection";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export const Drawer = ({ onClose, cartProducts, cartSum, onDeleteProductFromCart, onDeleteAllProductsFromCart, isPurchased }) => {

  const [isPurchaseButtonDisabled, setIsPruchaseButtonDisabled] = useState(false)

  useEffect(() => {
    setIsPruchaseButtonDisabled(false);
  }, [isPurchased])


  const onPurchase = () => {
    if (!isPurchaseButtonDisabled) {
      onDeleteAllProductsFromCart(cartProducts);
      setIsPruchaseButtonDisabled(true);
    }
  }

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
              <div onClick={onPurchase} style={isPurchaseButtonDisabled ? {display: "grid", alignItems: "center", justifyItems: "center", padding: "10px"} : {}}>
                {isPurchaseButtonDisabled ?
                  <Icon icon="eos-icons:bubble-loading" width="40px" />
                  :
                  <MainButton buttonText="Оформить заказ" />}
              </div>
            </section>
          </>
          : <EmptySection
            onClose={onClose}
            imgType={isPurchased ? "purchase" : "cart"}
            title={isPurchased ? "Заказ оформлен!" : "Корзина пуста"}
            description={isPurchased ? "Ваш заказ скоро будет передан курьерской доставке" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            position={{ padding: "0px 30px 60px 30px" }}
            linkTo={null}
          />
        }
      </dialog>
    </div>
  );
}