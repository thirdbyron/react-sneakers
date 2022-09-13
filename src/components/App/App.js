import { useEffect, useState } from "react";
import { Content } from "../../pages/Home";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { MainLayout } from "../Layouts/MainLayout";
import { Favorites } from "../../pages/Favorites";

function App() {

  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const sneakersResponse = await axios.get('https://631de283cc652771a48d2626.mockapi.io/products');

        const favoritesResponse = await axios.get('https://631de283cc652771a48d2626.mockapi.io/favorites');

        const cartResponse = await axios.get('https://631de283cc652771a48d2626.mockapi.io/cart');

        setProducts(sneakersResponse.data);
        setCartProducts(cartResponse.data);
        setFavoriteProducts(favoritesResponse.data);

        setIsLoaded(true);

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

  const onDeleteProductFromFavorite = async (product) => {
    try {
      await axios.delete(`https://631de283cc652771a48d2626.mockapi.io/favorites/${product.id}`);
      setFavoriteProducts((prev) => prev.filter((el) => el.productId !== product.productId));
    } catch (err) {
      throw new Error(err);
    }
  }

  const onAddToFavorite = async (productToFavorite) => {
    try {
      const res = await axios.post('https://631de283cc652771a48d2626.mockapi.io/favorites', productToFavorite);
      setFavoriteProducts((prev) => [...prev, res.data]);
    } catch (err) {
      throw new Error(err)
    }
  }

  const handleProductInFavorite = (productToFavorite) => {
    const productFromServer = favoriteProducts.find((el) => el.productId === productToFavorite.productId)

    if (productFromServer) {
      onDeleteProductFromFavorite(productFromServer);
    } else {
      onAddToFavorite(productToFavorite);
    }
  }

  return (
    <Routes>
      <Route path="/" element={
        <MainLayout
          cartProducts={cartProducts}
          onDeleteProductFromCart={onDeleteProductFromCart}
        />}
      >
        <Route index element={
          <Content
            products={products}
            onAddProductToCart={handleProductInCart}
            cartProducts={cartProducts}
            onAddToFavorite={handleProductInFavorite}
            favoriteProducts={favoriteProducts}
            isLoaded={isLoaded}
          />}
        />
        <Route path="favorites" element={
          <Favorites
            products={products}
            onAddProductToCart={handleProductInCart}
            cartProducts={cartProducts}
            onAddToFavorite={handleProductInFavorite}
            favoriteProducts={favoriteProducts}
            isLoaded={isLoaded}
          />}
        />

      </Route>
    </Routes>
  );
}

export default App;
