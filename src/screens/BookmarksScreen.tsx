import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { FlashList } from '@shopify/flash-list';
import { Box, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import { ImageSourcePropType } from 'react-native';

import { NavigatorParams } from '#app/core/navigation';

export type Link = {
  title: string;
  description: string;
  offer: string;
  link: string;
  imageSource: ImageSourcePropType;
};
const LINKS: Link[] = [
  {
    title: 'Rave Coffee',
    description: 'bookmarks.rave.description',
    offer: 'Get a free £5 off coupon',
    link: 'https://i.refs.cc/GIsaqgnM?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzA4NTY4MDc3fQ%3D%3D',
    imageSource: {
      uri: 'https://cdn.shopify.com/s/files/1/0390/4361/t/281/assets/logo.svg?v=70651892552638024431633614586',
    },
  },
  {
    title: 'Nuud',
    description: 'bookmarks.nuud.description',
    offer: '20% discount',
    link: 'https://prz.io/D0XKe5VI1',
    imageSource: {
      uri: 'https://d21buns5ku92am.cloudfront.net/68672/images/362390-NuudLogo_red_Tagline-01-ee5d2b-original-1598883281.png',
    },
  },
];

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Bookmarks'>;
};

export const BookmarksScreen = (_props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <FlashList
        estimatedItemSize={300}
        renderItem={({ item }) => {
          return (
            <Box>
              <Text>{item.title}</Text>
              <Text>{t(item.description)}</Text>
            </Box>
          );
        }}
        data={LINKS}
      />
    </>
  );
};
