import React, { useState } from 'react';
import { Footer } from 'components/Footer/Footer';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Lightbox } from 'components/Lightbox/Lightbox';
import { useTranslation } from 'react-i18next';

import css from './Pregnancy.module.css';

export function Pregnancy() {
  const [toggler, setToggler] = useState(false);
  const [url, setUrl] = useState('');
  const { t } = useTranslation();

  return (
    <>
      <Lightbox toggler={toggler} url={url} />
      <div className={css.container}>
        <h1 className={css.pageTitle}>{t('pregnancy')}</h1>
        <div className={css.pageContainer}>
          <ul className={css.leftColumn}>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741640/this-is-retoucher/pregnancy/img1_rsak7q.png"
                alt="woman in jeans"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741639/this-is-retoucher/pregnancy/img2_l7zpd8.png"
                alt="woman with hand"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741640/this-is-retoucher/pregnancy/img4_oybxdh.png"
                alt="woman sits on floor"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741641/this-is-retoucher/pregnancy/img7_mhtckg.png"
                alt="woman in black dress"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741640/this-is-retoucher/pregnancy/img8_x0kwos.png"
                alt="women with blue silk"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741644/this-is-retoucher/pregnancy/img10_lsavet.png"
                alt="woman lies"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741642/this-is-retoucher/pregnancy/img13_ct8mox.png"
                alt="woman in kelvin klein"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741643/this-is-retoucher/pregnancy/img14_caa28i.png"
                alt="woman in pink dress"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
          </ul>

          <ul className={css.rightColumn}>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741640/this-is-retoucher/pregnancy/img3_bz0lgs.png"
                alt="woman in lingerie and jacket"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741639/this-is-retoucher/pregnancy/img5_e9qze5.png"
                alt="woman in swimsuit sitting"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741639/this-is-retoucher/pregnancy/img6_kvy7t8.png"
                alt="woman in crossowks sitting"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741642/this-is-retoucher/pregnancy/img9_e9vhzb.png"
                alt="woman in pink dress lying"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741642/this-is-retoucher/pregnancy/img11_apeawp.png"
                alt="woman sitting"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741643/this-is-retoucher/pregnancy/img12_u8ksla.png"
                alt="woman in white rubashka staying"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.pregPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678741644/this-is-retoucher/pregnancy/img15_rxhku6.png"
                alt="woman with flowers"
                className={css.image}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
          </ul>
        </div>
      </div>
      <Sidebar variant="pregnancy" />
      <Footer />
    </>
  );
}
