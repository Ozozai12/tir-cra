import { Sidebar } from 'components/Sidebar/Sidebar';
import css from './NotFound.module.css';

export function NotFound() {
  return (
    <div>
      <Sidebar />
      <div className={css.notFoundSection}>
        <div className={css.textSide}>
          <span className={css.number}>404</span>
          <span className={css.error}>Error</span>
          <span className={css.pageNotFound}>Page not found</span>
          <a href="/this-is-retoucher" className={css.backButton}>
            go to main menu
          </a>
        </div>
        <div className={css.imageSide}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678792043/this-is-retoucher/404_jj8b18.jpg"
            alt="Not Found"
            className={css.notFoundImage}
          />
        </div>
      </div>
    </div>
  );
}
