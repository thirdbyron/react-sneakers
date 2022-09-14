import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import { Drawer } from "../Drawer";
import { Footer } from "../Footer";
import { MainHeader } from "../MainHeader";
import styles from './MainLayout.module.scss'

export const MainLayout = ({ cartProducts, onDeleteProductFromCart, onDeleteAllProductsFromCart, isPurchased, setIsPurchased }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartSum, setCartSum] = useState(0);

  const closeDrawer = () => {
    setIsPurchased(false);
    setIsDrawerOpen(false);
  }

  useEffect(() => {
    let sum = 0;
    if (cartProducts.length > 0) {
      cartProducts.forEach((product) => {
        sum += parseInt(product.price.replace(/[^0-9]/g, ""))
      });
    }
    setCartSum(sum);
  }, [cartProducts])

  return (
    <div className={styles.mainPage}>
      <MainHeader
        onClickOpenDrawer={setIsDrawerOpen}
        cartSum={cartSum}
      />

      <Outlet />

      <Footer />

      {isDrawerOpen &&
        <Drawer
          onClose={closeDrawer}
          cartProducts={cartProducts}
          cartSum={cartSum}
          onDeleteProductFromCart={onDeleteProductFromCart}
          onDeleteAllProductsFromCart={onDeleteAllProductsFromCart}
          isPurchased={isPurchased}
        />
      }
    </div>
  );
}