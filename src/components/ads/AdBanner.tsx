import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import { useSelector } from 'react-redux';

import { getShowAds } from '#app/core/auth/store/userSlice';

export const AdBanner = () => {
  const showAds = useSelector(getShowAds);
  return showAds ? (
    <BannerAd
      unitId={TestIds.BANNER}
      size={BannerAdSize.BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  ) : null;
};
