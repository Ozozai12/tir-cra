import { IconContext } from 'react-icons';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import css from './LangSelect.module.css';

const options = [
  {
    value: 'en',
    label: 'En',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/2560px-Flag_of_the_United_States_%281912-1959%29.svg.png',
  },
  {
    value: 'uk',
    label: 'Uk',
    flag: 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1679933141/this-is-retoucher/languages/twemoji_flag-ukraine_sm5nls.png',
  },
  {
    value: 'fr',
    label: 'Fr',
    flag: 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1679933141/this-is-retoucher/languages/twemoji_flag-france_mu1qap.png',
  },
  {
    value: 'de',
    label: 'De',
    flag: 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1679933141/this-is-retoucher/languages/twemoji_flag-germany_itucb2.png',
  },
  {
    value: 'es',
    label: 'Es',
    flag: 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1679933141/this-is-retoucher/languages/emojione-v1_flag-for-spain_o6tikx.png',
  },
  {
    value: 'it',
    label: 'It',
    flag: 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1679933141/this-is-retoucher/languages/twemoji_flag-italy_yc8zs8.png',
  },
  {
    value: 'sw',
    label: 'Sw',
    flag: 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1679933141/this-is-retoucher/languages/twemoji_flag-central-african-republic_i0c9sv.png',
  },
];

export const LangSelect = () => {
  const { i18n } = useTranslation();
  let language = localStorage.getItem('i18nextLng');

  const [lang, setLang] = useState(language || 'en');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('i18nextLng', lang);
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  const handleLangSelect = option => {
    setLang(option);
    i18n.changeLanguage(option);
    setIsOpen(false);
  };

  const selectedLanguage = lang.charAt(0).toUpperCase() + lang.slice(1);

  return (
    <div className={css.dropdownMenu}>
      <button
        className={css.dropdownMenu__button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLanguage}
        <IconContext.Provider value={{ className: css.langIcon }}>
          {!isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
        </IconContext.Provider>
      </button>
      {isOpen && (
        <ul
          className={css.dropdownMenu__options}
          onBlur={() => setIsOpen(false)}
        >
          {options.map(option => (
            <li
              key={option.label}
              className={css.dropdownMenu__option}
              onClick={() => handleLangSelect(option.value)}
            >
              {option.value}
              <div className={css.flagContainer}>
                <img src={option.flag} alt={option.value} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
