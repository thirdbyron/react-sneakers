import { ItemsList } from "./Items-list";
import styles from './Content.module.scss';

export const Content = () => {

  return (
    <main className={styles.content}>
      <ItemsList />
    </main>
  );
}