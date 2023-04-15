import { CgClose } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import css from './Menu.module.css';
import { StyledLink } from './Menu.styled';
import { useTranslation } from 'react-i18next';

export function Menu({ onMenuClose }) {
  const { t } = useTranslation();
  return (
    <div className={css.backdrop}>
      <span className={css.closeBtn} onClick={onMenuClose}>
        <IconContext.Provider value={{ className: css.closeIcon }}>
          <CgClose />
        </IconContext.Provider>
      </span>
      <ul className={css.menuList} onClick={onMenuClose}>
        <li>
          <StyledLink to="/about" className={css.menuItem}>
            {t('about')}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/payment" className={css.menuItem}>
            {t('payment')}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/reviews" className={css.menuItem}>
            {t('reviews')}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/celebrity" className={css.menuItem}>
            {t('celebrity')}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/magazines" className={css.menuItem}>
            {t('magazines')}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/beauty" className={css.menuItem}>
            {t('beauty')}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/pregnancy" className={css.menuItem}>
            {t('pregnancy')}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/family" className={css.menuItem}>
            {t('family')}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/before-after" className={css.menuItem}>
            {t('beforeAfter')}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/18+" className={css.menuItem}>
            18+
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}
