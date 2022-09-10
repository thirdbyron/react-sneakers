import { ProductCard } from "./Product-card";
import styles from './Items-list.module.scss'

const products = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999 руб.',
    imgId: '1',
  },
  {
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: '8 999 руб.',
    imgId: '2',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8 499 руб.',
    imgId: '3',
  },
  {
    title: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: '10 799 руб.',
    imgId: '4',
  },
  {
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: '16 499 руб.',
    imgId: '5',
  },
]

export const ItemsList = () => {
  return (
    <section className={`${styles.items} content__list`}>
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
                title={product.title}
                imgId={product.imgId}
                price={product.price}
                onClick={() => console.log(product)}
              />)}
          </div>
        </section>
  );
}