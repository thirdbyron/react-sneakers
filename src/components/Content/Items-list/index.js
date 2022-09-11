import { ProductCard } from "./Product-card";
import styles from './Items-list.module.scss'

export const ItemsList = ({ products }) => {

  return (
    <section className={styles.items}>
      <h1 className={styles.title}> Все кроссовки </h1>
      <div className={`search ${styles.search}`}>
        <div className="search__wrapper">
          <label htmlFor="search" className="search__label">
            <img src="/img/search.svg" alt="search" className="icon icon_size_m" />
          </label>
          <input id="search" type="text" placeholder="Поиск..." className="search__input" />
        </div>
      </div>
      <div className={styles.itemsList}>
        {products.map((product) =>
          <ProductCard
            key={product.imgId}
            title={product.title}
            imgId={product.imgId}
            price={product.price}
          />)}
      </div>
    </section>
  );
}