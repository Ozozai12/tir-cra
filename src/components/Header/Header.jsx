import { StyledLink, StyledLogoLink } from './Header.styled';
import { LangSelect } from 'components/Header/LangSelect/LangSelect';
import { useTranslation } from 'react-i18next';

import css from './Header.module.css';

import { Logo } from 'components/Header/Logo/Logo';

export const Header = ({ onMenuOpen }) => {
  const { t } = useTranslation();

  return (
    <div className={css.header}>
      <div className={css.container}>
        <div className={css.langContainer}>
          <div className={css.langSwitcher}>
            <LangSelect />
          </div>
        </div>
        <div className={css.headerContainer}>
          <StyledLogoLink to="/" className={css.logoItem}>
            <Logo />
          </StyledLogoLink>
          <StyledLink to="/about" className={css.navItem}>
            {t('about')}
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/payment" className={css.navItem}>
            {t('payment')}
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/reviews" className={css.navItem}>
            {t('reviews')}
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/celebrity" className={css.navItem}>
            {t('celebrity')}
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/magazines" className={css.navItem}>
            {t('magazines')}
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/beauty" className={css.navItem}>
            {t('beauty')}
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/pregnancy" className={css.navItem}>
            {t('pregnancy')}
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/family" className={css.navItem}>
            {t('family')}
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/before-after" className={css.navItem}>
            {t('beforeAfter')}
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/18+" className={css.navItem}>
            18+
            <span className={css.underline} />
          </StyledLink>
        </div>
        <div className={css.burger} onClick={onMenuOpen}>
          <span className={css.upperLine}></span>
          <span className={css.middleLine}></span>
          <span className={css.lowerLine}></span>
        </div>
      </div>
    </div>
  );
};
