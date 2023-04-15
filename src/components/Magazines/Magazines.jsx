import React, { useState } from 'react';
import { Lightbox } from 'components/Lightbox/Lightbox';
import { Footer } from 'components/Footer/Footer';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { useTranslation } from 'react-i18next';
import css from './Magazines.module.css';

export function Magazines() {
  const [toggler, setToggler] = useState(false);
  const [url, setUrl] = useState('');
  const { t } = useTranslation();

  return (
    <>
      <Lightbox toggler={toggler} url={url} />
      <div className={css.container}>
        <h1 className={css.pageTitle}>{t('magazines')}</h1>
        <div className={css.pageContainer}>
          <div className={css.columnContainerOne}>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438740/this-is-retoucher/magazines/mag1_qr9ijg.jpg"
              alt="blackhair women pose"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438740/this-is-retoucher/magazines/mag5_zlgnbm.jpg"
              alt="latin girl with flowers"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438741/this-is-retoucher/magazines/mag11_nqzhgp.jpg"
              alt="woman with hat"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
          </div>
          <div className={css.columnContainerTwo}>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438740/this-is-retoucher/magazines/mag2_zxrquy.jpg"
              alt="girl with many flowers"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438740/this-is-retoucher/magazines/mag6_c40by0.jpg"
              alt="pregnant women with roses"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438740/this-is-retoucher/magazines/mag7_fyvbzs.jpg"
              alt="girl with flower swimwear"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438741/this-is-retoucher/magazines/mag12_veipaf.jpg"
              alt="content"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
          </div>
          <div className={css.columnContainerThree}>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438740/this-is-retoucher/magazines/mag3_nfruc0.jpg"
              alt="marika"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <div className={css.innerPhotoContainer}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438740/this-is-retoucher/magazines/mag8_dz1gty.jpg"
                alt="women sitting"
                className={css.magazinePhoto}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438741/this-is-retoucher/magazines/mag9_zgopxr.jpg"
                alt="women in underware"
                className={css.magazinePhoto}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </div>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438741/this-is-retoucher/magazines/mag13_lazfdn.jpg"
              alt="women in room"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
          </div>
          <div className={css.columnContainerFour}>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438740/this-is-retoucher/magazines/mag4_pjnw4f.jpg"
              alt="pregnant woman in pose"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438741/this-is-retoucher/magazines/mag10_vtz9pw.jpg"
              alt="black women in blue suit"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678438741/this-is-retoucher/magazines/mag14_rqzbw5.jpg"
              alt="girl smiling"
              className={css.magazinePhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
          </div>
        </div>
      </div>
      <Sidebar variant="magazines" />
      <Footer />
    </>
  );
}
