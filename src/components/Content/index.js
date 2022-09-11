import { ItemsList } from "./Items-list";
import styles from './Content.module.scss';

export const Content = ({ products }) => {

  return (
    <main className={styles.content}>
      <ItemsList products={products} />
    </main>
  );
}