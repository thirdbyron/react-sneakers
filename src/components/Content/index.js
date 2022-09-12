import { ItemsList } from "./ItemsList";
import styles from './Content.module.scss';

export const Content = ({ products, onAddProductToCart }) => {

  return (
    <main className={styles.content}>
      <ItemsList products={products} onAddProductToCart={onAddProductToCart} />
    </main>
  );
}