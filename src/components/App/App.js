import { useEffect, useState } from "react";
import { Content } from "../Content";
import { Drawer } from "../Drawer";
import { Footer } from "../Footer";
import { MainHeader } from "../MainHeader";
import styles from './App.module.scss'

function App() {

  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartSum, setCartSum] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://631de283cc652771a48d2626.mockapi.io/sneakers');

      const sneakers = await data.json();

      setProducts(sneakers)
    }

    fetchData();
  }, []);

  const onAddProductToCart = (newProductInCart) => {
    setCartProducts((prev) => prev.some((el) => el.imgId === newProductInCart.imgId) ? prev.filter((el) => el.imgId !== newProductInCart.imgId) : [...prev, newProductInCart])
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
      <MainHeader onClickOpenDrawer={setIsDrawerOpen} cartSum={cartSum} />
      <Content products={products} onAddProductToCart={onAddProductToCart} />
      <Footer />
      {isDrawerOpen && <Drawer onClose={setIsDrawerOpen} cartProducts={cartProducts} cartSum={cartSum}/>}
    </div>
  );
}

export default App;
