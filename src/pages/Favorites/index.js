import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { EmptySection } from "../../components/generic/EmptySection";
import { ItemsList } from "../../components/ItemsList";
import { CONTENT_TITLES } from "../../const";
import styles from './Favorites.module.scss';

export const Favorites = ({ products, onAddProductToCart, cartProducts, onAddToFavorite, favoriteProducts, isLoaded }) => {

  return (
    <main className={styles.content}>

      <Link to="/">
        <div className={styles.returnBack}>
          <Icon icon="ant-design:arrow-left-outlined" width="22px" />
          <span className={styles.returnBackText}>Назад</span>
        </div>
      </Link>

      {favoriteProducts.length > 0
        ? <ItemsList
          products={products}
          onAddProductToCart={onAddProductToCart}
          cartProducts={cartProducts}
          onAddToFavorite={onAddToFavorite}
          favoriteProducts={favoriteProducts}
          mainTitle={CONTENT_TITLES.favorites}
          isLoaded={isLoaded}
        />
        : <EmptySection
          onClose={null}
          imgType="favorites"
          title="Закладок нет :("
          description="Вы ничего не добавляли в закладки."
          position={{ padding: "60px 30px 60px 30px" }}
          linkTo="/"
        />
      }

    </main>
  );
}