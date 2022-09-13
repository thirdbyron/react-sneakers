import { ProductCard } from "./ProductCard";
import styles from './ItemsList.module.scss'
import { useState } from "react";
import { Search } from "../generic/Search";
import { Icon } from '@iconify/react';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Icon icon="eos-icons:bubble-loading" width="54" />
    </div>
  );
}

export const ItemsList = ({ products, onAddProductToCart, cartProducts, onAddToFavorite, favoriteProducts, mainTitle, location, isLoaded }) => {

  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };

  const renderItems = () => products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase())).map((product, index) =>
    <ProductCard
      key={index}
      {...product}
      onAddProductToCart={onAddProductToCart}
      cartProducts={cartProducts}
      onAddToFavorite={onAddToFavorite}
      favoriteProducts={favoriteProducts}
    />);

  const renderFavorites = () => {
    let filteredProducts = [];
    if (favoriteProducts.length > 0) {
      for (let i = 0; i < favoriteProducts.length; i++) {
        filteredProducts.push(renderItems().find((component) => component.props.id === favoriteProducts[i].productId));
      }
    }
    return filteredProducts;
  }

  const loadItems = () => {
    if (!isLoaded) {
      return <Loading />
    } else {
      return (location === "/" ? renderItems() : renderFavorites())
    }
  }

  return (
    <section className={styles.items}>
      <h1 className={styles.title}>
        {searchValue !== '' ? `Поиск по запросу: "${searchValue}"` : `${mainTitle}`}
      </h1>
      <Search
        searchValue={searchValue}
        onChangeSearchInput={onChangeSearchInput}
        mod={styles.search}
      />
      <div className={styles.itemsList}>
        {
          loadItems()
        }
      </div>
    </section>
  );
}