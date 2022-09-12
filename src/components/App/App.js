import axios from "axios";
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
    const fetchData = async () => {
      try {
        const sneakersResponse = await axios.get('https://631de283cc652771a48d2626.mockapi.io/products');

        const cartResponse = await axios.get('https://631de283cc652771a48d2626.mockapi.io/cart');

        setProducts(sneakersResponse.data);
        setCartProducts(cartResponse.data);
      } catch (err) {
        throw new Error('Ошибка!');
      }
    }

    fetchData();
  }, []);

  const onDeleteProductFromCart = async (deletedProduct) => {
    try {
      await axios.delete(`https://631de283cc652771a48d2626.mockapi.io/cart/${deletedProduct.id}`);
      setCartProducts((prev) => prev.filter((el) => el.productId !== deletedProduct.productId));
    } catch (err) {
      throw new Error(err);
    }
  }

  const onAddProductToCart = async (newProductInCart) => {
    try {
      const res = await axios.post('https://631de283cc652771a48d2626.mockapi.io/cart', newProductInCart);
      setCartProducts((prev) => [...prev, res.data]);
    } catch (err) {
      throw new Error(err)
    }
  }

  const handleProductInCart = (productToCart) => {

    const productFromServer = cartProducts.find((el) => el.productId === productToCart.productId)

    if (productFromServer) {
      onDeleteProductFromCart(productFromServer);
    } else {
      onAddProductToCart(productToCart);
    }
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
      <Content products={products} onAddProductToCart={handleProductInCart} />
      <Footer />
      {isDrawerOpen && <Drawer onClose={setIsDrawerOpen} cartProducts={cartProducts} cartSum={cartSum} onDeleteProductFromCart={onDeleteProductFromCart}/>}
    </div>
  );
}

export default App;
