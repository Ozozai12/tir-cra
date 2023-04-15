import React, { useState } from 'react';
import { Lightbox } from 'components/Lightbox/Lightbox';
import { Footer } from 'components/Footer/Footer';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { useTranslation } from 'react-i18next';
import css from './Celebrity.module.css';

export function Celebrity() {
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
        <h1 className={css.pageTitle}>{t('celebrity')}</h1>
        <div className={css.pageContainer}>
          <div className={css.assetContainerOne}>
            <a
              href="https://res.cloudinary.com/dmadhdzzm/image/upload/v1680710471/this-is-retoucher/large-photos/celebrity/cel1_s81wbj.jpg"
              onClick={e => openImage(e)}
              className={css.photoOne}
            >
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678392548/this-is-retoucher/celeb1_qe2cag.jpg"
                alt="women sitting"
              />
            </a>
            <div className={css.frameOne} />
            <span className={css.titleOne}>This is retoucher</span>
            <span className={css.nameOne}>
              Channah Koerten
              <span className={css.roleOne}>
                <br /> {t('media')}
              </span>
            </span>
          </div>
          <div className={css.assetContainerTwo}>
            <a
              href="https://res.cloudinary.com/dmadhdzzm/image/upload/v1680710471/this-is-retoucher/large-photos/celebrity/cel2_u1by7n.jpg"
              onClick={e => openImage(e)}
              className={css.photoTwo}
            >
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678392548/this-is-retoucher/celeb2_xcxbhg.jpg"
                alt="woman blackhair"
              />
            </a>
            <div className={css.frameTwo} />
            <span className={css.titleTwo}>retouch</span>
            <span className={css.nameTwo}>
              Penthesilea
              <span className={css.roleTwo}>{t('model')}</span>
            </span>
          </div>
          <div className={css.assetContainerThree}>
            <a
              href="https://res.cloudinary.com/dmadhdzzm/image/upload/v1680710471/this-is-retoucher/large-photos/celebrity/cel3_kltxh8.jpg"
              onClick={e => openImage(e)}
              className={css.photoThree}
            >
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678392548/this-is-retoucher/celeb3_qtivqc.jpg"
                alt="50 cent"
              />
            </a>
            <div className={css.frameThree} />
            <span className={css.titleThree}>retoucheretoucher</span>
            <span className={css.nameThree}>
              50 cent<span className={css.roleThree}>{t('rapper')}</span>
            </span>
          </div>
          <div className={css.assetContainerFour}>
            <a
              href="https://res.cloudinary.com/dmadhdzzm/image/upload/v1680710471/this-is-retoucher/large-photos/celebrity/cel4_af8nyq.jpg"
              onClick={e => openImage(e)}
              className={css.photoFour}
            >
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678392548/this-is-retoucher/celeb4_x5qd2u.jpg"
                alt="man and women"
              />
            </a>
            <div className={css.frameFour} />
            <span className={css.titleFour}>photo</span>
            <span className={css.nameFour}>
              Tonny Vilhena<span className={css.roleFour}>{t('player')}</span>
            </span>
          </div>
        </div>
      </div>
      <Sidebar variant="celebrity" />
      <Footer />
    </>
  );
}
