import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import { Drawer } from "../Drawer";
import { Footer } from "../Footer";
import { MainHeader } from "../MainHeader";
import styles from './MainLayout.module.scss'

export const MainLayout = ({ cartProducts, onDeleteProductFromCart }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartSum, setCartSum] = useState(0);

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
          onClose={setIsDrawerOpen}
          cartProducts={cartProducts}
          cartSum={cartSum}
          onDeleteProductFromCart={onDeleteProductFromCart}
        />
      }
    </div>
  );
}