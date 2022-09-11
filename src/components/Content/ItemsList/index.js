import { ProductCard } from "./ProductCard";
import styles from './ItemsList.module.scss'
import { useState } from "react";
import { Search } from "../../Search";

export const ItemsList = ({ products }) => {

  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
    console.log(searchValue)
  };

  const filterProductAfterSearch = () => products
    .filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((product) =>
      <ProductCard
        key={product.imgId}
        title={product.title}
        imgId={product.imgId}
        price={product.price}
      />);

  return (
    <section className={styles.items}>
      <h1 className={styles.title}>
        {searchValue !== '' ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
      </h1>
      <Search
        searchValue={searchValue}
        onChangeSearchInput={onChangeSearchInput}
        mod={styles.search}
      />
      <div className={styles.itemsList}>
        {
          filterProductAfterSearch()
        }
      </div>
    </section>
  );
}