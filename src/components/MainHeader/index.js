import styles from './MainHeader.module.scss';

export const MainHeader = ({ onClickOpenDrawer, cartSum }) => {

  return (
    <header className={styles.mainHeader}>
      <div className={styles.leftWrapper}>
        <img src="/img/logo.png" alt="logo" className={`logo ${styles.logo}`} />
        <div className={styles.infoWrapper}>
          <h3 className={styles.title}>
            React Sneakers
          </h3>
          <p className={styles.description}>
            Магазин лучших кроссовок
          </p>
        </div>
      </div>
      <ul className={styles.rightWrapper}>
        <li
          className={`${styles.item} ${styles.itemCart}`}
          onClick={() => onClickOpenDrawer(true)}
        >
          <img src="/img/cart.svg" alt="cart" className="icon" />
          <span className={styles.cartSum}> {cartSum > 0 ? `${cartSum} руб.` : '0 руб.'} </span>
        </li>
        <li className={styles.item}>
          <img src="/img/favorite.svg" alt="favorite" className="icon" />
        </li>
        <li className={styles.item}>
          <img src="/img/profile.svg" alt="profile" className="icon" />
        </li>
      </ul>
    </header>
  );
}