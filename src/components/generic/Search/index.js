import styles from './Search.module.scss';

export const Search = ({searchValue, onChangeSearchInput, mod}) => {
  return (
    <div className={`${styles.search} ${mod}`}>
      <div className={styles.wrapper}>
        <label htmlFor="search" className={styles.label}>
          <img src="/img/search.svg" alt="search" className="icon icon_size_m" />
        </label>
        <input
          id="search"
          type="text"
          value={searchValue}
          placeholder="Поиск..."
          className={styles.input}
          onChange={onChangeSearchInput}
        />
      </div>
    </div>
  );
}

