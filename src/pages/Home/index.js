import { ItemsList } from "../../components/ItemsList";
import { CONTENT_TITLES } from "../../const";
import styles from './Content.module.scss';

export const Content = ({ products, onAddProductToCart, cartProducts, onAddToFavorite, favoriteProducts, isLoaded }) => {

  return (
    <main className={styles.content}>
      <ItemsList
        products={products}
        onAddProductToCart={onAddProductToCart}
        cartProducts={cartProducts}
        onAddToFavorite={onAddToFavorite}
        favoriteProducts={favoriteProducts}
        mainTitle={CONTENT_TITLES.home}
        location="/"
        isLoaded={isLoaded}
      />
    </main>
  );
}