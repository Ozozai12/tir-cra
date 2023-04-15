import css from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={css.logoContainer}>
      <span className={css.this}>This</span>
      <br />
      <div className={css.isRetoucher}>
        <span className={css.is}>is</span>
        <span className={css.retoucher}>Retoucher</span>
      </div>
    </div>
  );
};
