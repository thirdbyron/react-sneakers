import { Link } from 'react-router-dom';
import { MainButton } from '../MainButton';
import styles from './EmptySection.module.scss';

export const EmptySection = ({ onClose, imgType, title, description, position, linkTo }) => {

  return (
    <section className={styles.emptyCart} style={position}>
      <img src={`/img/empty-${imgType}.jpg`} alt={`Empty ${imgType}`} />
      <h4 className={styles.title}> {title} </h4>
      <p className={styles.description}> {description} </p>
      {onClose ?
        <div className={styles.backButton} onClick={() => onClose(false)}>
          <MainButton buttonText="Вернуться назад" mod={true} />
        </div>
        : 
        <Link to={linkTo}>
          <MainButton buttonText="Вернуться назад" mod={true} />
        </Link>
        }

    </section>
  );
}