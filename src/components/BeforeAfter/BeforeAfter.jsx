import React, { useState } from 'react';
import { Lightbox } from 'components/Lightbox/Lightbox';
import { Footer } from 'components/Footer/Footer';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { useTranslation } from 'react-i18next';

import css from './BeforeAfter.module.css';

export function BeforeAfter() {
  const [toggler, setToggler] = useState(false);
  const [url, setUrl] = useState('');
  const { t } = useTranslation();

  return (
    <>
      <Lightbox toggler={toggler} url={url} />
      <div className={css.container}>
        <h1 className={css.pageTitle}>{t('beforeAfter')}</h1>
        <div className={css.pageContainer}>
          <ul className={css.leftColumn}>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef1_vtkkxr.jpg"
                alt="whitehair woman before"
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af1_zzhp2k.jpg"
                alt="whitehair woman after"
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef2_kfg1n7.jpg"
                alt="woman painter before"
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af2_ufft4b.jpg"
                alt="woman painter after"
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef3_iml8tn.jpg"
                alt="black women closed eyes before"
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af3_fcpszg.jpg"
                alt="black women closed eyes after"
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
          </ul>
          <ul className={css.rightColumn}>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef4_pr3ea5.jpg"
                alt="black women before"
                width={281}
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af4_g8eorb.jpg"
                alt="black women after"
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef5_kb4ube.jpg"
                alt="woman with earrings before"
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af5_drghli.jpg"
                alt="woman with earrings after"
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef6_txqgat.jpg"
                alt="woman in swimsuit before"
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
            <li className={css.beforeafterPhoto}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af6_t2kilj.jpg"
                alt="woman in swimsuit after"
                onClick={e => {
                  setToggler(!toggler);
                  setUrl(e.currentTarget.src);
                }}
              />
            </li>
          </ul>
        </div>
      </div>
      <Sidebar variant="before-after" />
      <Footer />
    </>
  );
}
