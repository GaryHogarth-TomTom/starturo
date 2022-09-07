import { Center } from 'native-base';
import { useSelector } from 'react-redux';

import { getShowAds } from '#app/core/auth/store/userSlice';

type Banner = {
  src: string;
  width: string;
  height: string;
};
const BANNERS: Banner[] = [
  {
    src: 'https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=42&l=ur1&category=amazongeneric&banner=1SSZXMV91WA8E5ZECC02&f=ifr&linkID=883abf05241d3e4cd47dc45d30ec5ef9&t=pcgast-21&tracking_id=pcgast-21',
    width: '234',
    height: '60',
  },
  {
    src: 'https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=288&l=ur1&category=audible&banner=04ZXHZ2ADJGHG67D9BG2&f=ifr&linkID=fd084891d20f753915ce62b0f13d2afa&t=pcgast-21&tracking_id=pcgast-21',
    width: '320',
    height: '50',
  },
  {
    src: 'https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=288&l=ur1&category=ukecofriendly&banner=12EPWP5FCCQJ0YW5C282&f=ifr&linkID=fa0eaecbc1b77de2b1eb6648fe2a5ad9&t=pcgast-21&tracking_id=pcgast-21',
    width: '320',
    height: '50',
  },
];

const getRandomBanner = (): Banner => {
  return BANNERS[Math.floor(Math.random() * BANNERS.length)];
};

export const AdBanner = () => {
  const showAds = useSelector(getShowAds);
  return showAds ? (
    <Center>
      <iframe
        {...getRandomBanner()}
        scrolling="no"
        style={{ border: 'none' }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
      />
    </Center>
  ) : null;
};
