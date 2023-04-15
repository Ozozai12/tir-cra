import clsx from 'clsx';
import { IconContext } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { RiMailAddLine } from 'react-icons/ri';
import css from './Sidebar.module.css';

export function Sidebar({ variant }) {
  return (
    <div className={clsx(css.sidebar, css[variant])}>
      <a
        href="https://instagram.com/this_is_retoucher?igshid=YmMyMTA2M2Y="
        className={css.frame}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <IconContext.Provider value={{ className: css.icon }}>
          <AiFillInstagram />
        </IconContext.Provider>
      </a>
      <a href="mailto:r.retouch.photo@gmail.com" className={css.frame}>
        <IconContext.Provider value={{ className: css.icon }}>
          <RiMailAddLine />
        </IconContext.Provider>
      </a>
    </div>
  );
}
