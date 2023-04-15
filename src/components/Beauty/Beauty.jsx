import React, { useState } from 'react';
import { Lightbox } from 'components/Lightbox/Lightbox';
import { Footer } from 'components/Footer/Footer';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { useTranslation } from 'react-i18next';

import css from './Beauty.module.css';

export function Beauty() {
  const [toggler, setToggler] = useState(false);
  const [url, setUrl] = useState('');
  const { t } = useTranslation();

  const openImage = e => {
    e.preventDefault();
    setToggler(!toggler);
    setUrl(e.currentTarget.href);
  };

  return (
    <>
      <Lightbox toggler={toggler} url={url} />
      <div className={css.container}>
        <h1 className={css.pageTitle}>{t('beauty')}</h1>
        <div className={css.pageContainerUpper}>
          <div className={css.assetContainerOne}>
            <a
              href="https://res.cloudinary.com/dmadhdzzm/image/upload/v1680620353/this-is-retoucher/large-photos/beauty/b1_ehzz4c.jpg"
              onClick={e => openImage(e)}
              className={css.photoOne}
            >
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678732241/this-is-retoucher/beauty1_ejgdfc.jpg"
                alt="woman face"
              />
            </a>
            <div className={css.frameOne} />
            <span className={css.titleOne}>This is retoucher</span>
          </div>
          <div className={css.assetContainerTwo}>
            <a
              href="https://res.cloudinary.com/dmadhdzzm/image/upload/v1680620353/this-is-retoucher/large-photos/beauty/b2_g6ei19.jpg"
              onClick={e => openImage(e)}
              className={css.photoTwo}
            >
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678732241/this-is-retoucher/beauty2_hphoyh.jpg"
                alt="woman ear"
              />
            </a>
            <div className={css.frameTwo} />
            <span className={css.titleTwo}>retouch</span>
          </div>
        </div>
        <div className={css.pageContainerLower}>
          <div className={css.assetContainerThree}>
            <a
              href="https://res.cloudinary.com/dmadhdzzm/image/upload/v1680620353/this-is-retoucher/large-photos/beauty/b3_uhqy3u.jpg"
              onClick={e => openImage(e)}
              className={css.photoThree}
            >
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678732242/this-is-retoucher/beauty3_tihscp.jpg"
                alt="woman flowers"
              />
            </a>
            <div className={css.frameThree} />
            <span className={css.titleThreeDesktop}>retoucheretoucher</span>
            <span className={css.titleThreeTablet}>retoucher</span>
          </div>
          <div className={css.assetContainerFour}>
            <a
              href="https://res.cloudinary.com/dmadhdzzm/image/upload/v1680620353/this-is-retoucher/large-photos/beauty/b4_gxtxl9.jpg"
              onClick={e => openImage(e)}
              className={css.photoFour}
            >
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678732241/this-is-retoucher/beauty4_mbkzrr.jpg"
                alt="woman makeup"
              />
            </a>
            <div className={css.frameFour} />
            <span className={css.titleFour}>photo</span>
            <span className={css.titleFive}>retoucheretoucher</span>
          </div>
        </div>
      </div>
      <Sidebar variant="beauty" />
      <Footer />
    </>
  );
}
