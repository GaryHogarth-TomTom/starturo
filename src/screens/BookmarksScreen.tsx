import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { FlashList } from '@shopify/flash-list';
import { Card, Text, Layout } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { ImageSourcePropType, Linking, StyleSheet } from 'react-native';

import { NavigatorParams } from '#app/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Bookmarks'>;
};

export type Link = {
  title: string;
  description: string;
  offer: string;
  link: string;
  imageSource: ImageSourcePropType;
};
export const BookmarksScreen = ({ navigation }: Props) => {
  const { i18n } = useTranslation();
  const links: Link[] = React.useMemo(
    () => [
      {
        title: 'Rave Coffee',
        description: 'The best coffee there is',
        offer: 'Get a free £5 off coupon',
        link: 'https://i.refs.cc/GIsaqgnM?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzA4NTY4MDc3fQ%3D%3D',
        imageSource: {
          uri: 'https://cdn.shopify.com/s/files/1/0390/4361/t/281/assets/logo.svg?v=70651892552638024431633614586',
        },
      },
      {
        title: 'Nuud',
        description:
          'Stop using deodorant, start using nuud: the natural anti-odorant. Effective for 3-7 days. No dodgy chemical ingredients, no aluminium, no parabens - 100% vegan & cruelty-free.',
        offer: '20% discount',
        link: 'https://prz.io/D0XKe5VI1',
        imageSource: {
          uri: 'https://d21buns5ku92am.cloudfront.net/68672/images/362390-NuudLogo_red_Tagline-01-ee5d2b-original-1598883281.png',
        },
      },
    ],
    [i18n.language],
  );
  return (
    <Layout style={styles.container}>
      <FlashList
        estimatedItemSize={300}
        renderItem={({ item }) => {
          return (
            <Card onPress={() => Linking.openURL(item.link)}>
              <Text category="h3">{item.title}</Text>
              <Text>{item.description}</Text>
            </Card>
          );
        }}
        data={links}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});
