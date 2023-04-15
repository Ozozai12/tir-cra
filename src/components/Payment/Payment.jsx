import { Footer } from 'components/Footer/Footer';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { useTranslation } from 'react-i18next';
import css from './Payment.module.css';

export function Payment() {
  const { t } = useTranslation();
  return (
    <>
      <div className={css.container}>
        <h1 className={css.pageTitle}>{t('payment')}</h1>
        <div className={css.pageContainer}>
          <div className={css.priceContainer}>
            <div className={css.priceThumb}>
              <span className={css.thumbText}>{t('price_list')}</span>
            </div>
            <div className={css.imageThumb}>
              <div className={css.imageContainer}>
                <img
                  src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678389626/this-is-retoucher/pay1_rrcq9n.jpg"
                  alt="pregnant women with flowers"
                  className={css.payPhoto}
                />
                <span className={css.priceTitle}>{t('basic')}</span>
                <span className={css.priceValue}>{t('from')} 5$</span>
              </div>
              <div className={css.imageContainer}>
                <img
                  src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678389625/this-is-retoucher/pay2_r1wnij.jpg"
                  alt="woman's portrait"
                  className={css.payPhoto}
                />
                <span className={css.priceTitle}>{t('high_end')}</span>
                <span className={css.priceValue}>{t('from')} 12$</span>
              </div>
              <p className={css.termsText}>terms 1-2 days</p>
            </div>
          </div>

          <div className={css.payContainer}>
            <div className={css.payThumb}>
              <span className={css.thumbText}>{t('choose_method')}</span>
            </div>
            <div className={css.iphoneFrame}>
              <div className={css.iphoneScreen}>
                <a
                  href="https://www.paypal.com/ru/home"
                  className={css.payItem}
                >
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678390371/this-is-retoucher/payment/_MGL1282_1_ercf6w.png"
                    alt="paypal"
                    className={css.payIcon}
                  />
                  <span className={css.payTitle}>PayPal</span>
                </a>
                <a href="https://www.transfergo.com/" className={css.payItem}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678390371/this-is-retoucher/payment/_MGL1282_7_ziwyqg.png"
                    alt="transfergo"
                    className={css.payIcon}
                  />
                  <span className={css.payTitle}>TransferGo</span>
                </a>
                <a
                  href="https://www.moneygram.com/mgo/us/en/"
                  className={css.payItem}
                >
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1679224330/this-is-retoucher/payment/_MGL1282_3_rptqn2.png"
                    alt="moneygram"
                    className={css.payIcon}
                  />
                  <span className={css.payTitle}>MoneyGram</span>
                </a>
                <a href="https://paysend.com" className={css.payItem}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1679224330/this-is-retoucher/payment/_MGL1282_2_oafc0z.png"
                    alt="paysend"
                    className={css.payIcon}
                  />
                  <span className={css.payTitle}>Paysend</span>
                </a>
                <a href="https://wise.com/" className={css.payItem}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678390371/this-is-retoucher/payment/_MGL1282_5_xxqwkv.png"
                    alt="wise"
                    className={css.payIcon}
                  />
                  <span className={css.payTitle}>Wise</span>
                </a>
                <a href="https://www.easysend.pl/" className={css.payItem}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1679224330/this-is-retoucher/payment/_MGL1282_6_cskyts.png"
                    alt="easysend"
                    className={css.payIcon}
                  />
                  <span className={css.payTitle}>EasySend</span>
                </a>
                <a
                  href="https://www.westernunion.com/us/en/home.html"
                  className={css.payItem}
                >
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678390371/this-is-retoucher/payment/western-union-logo-high-res-11563546722x1pkn9b2ds_1_mdqber.png"
                    alt="westernUnion"
                  />
                  <span className={css.payTitle}>WesternUnion</span>
                </a>
              </div>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1679340118/this-is-retoucher/2_rnnesi.png"
                alt="iphone"
                className={css.iphone}
              />
            </div>
          </div>
        </div>
      </div>
      <Sidebar variant="payment" />
      <Footer />
    </>
  );
}
