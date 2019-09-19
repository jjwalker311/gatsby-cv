import React, { useContext, useMemo } from 'react';

import TitlePanel from 'components/atoms/TitlePanel';

import Seo from 'components/molecules/Seo';
import Layout from 'components/molecules/Layout';
import FrequentlyAskedQuestions from 'components/molecules/FrequentlyAskedQuestions';

import BulletImages from 'components/organisms/BulletImages';

import PAGES from 'constants/pages';
import COLOURS from 'constants/colours';
import POSITION from 'constants/positions';

import Vodafone from 'components/atoms/Images/Vodafone';
import CognitoIQ from 'components/atoms/Images/CognitoIQ';
import Ibm from 'components/atoms/Images/Ibm';
import Tgm from 'components/atoms/Images/Tgm';

import LocaleContext from 'locale';

export default function Employment() {
  const lang = useContext(LocaleContext).employment;

  // Tiles to show employment history
  const tiles = useMemo(() => [
    {
      // Vodafone/MMT Digital
      title: lang.tiles.vodafone.title,
      subtitle: lang.tiles.vodafone.subtitle,
      bulletPoints: lang.tiles.vodafone.bulletPoints,
      imagePosition: POSITION.LEFT,
      backgroundColour: COLOURS.BACKGROUND.REALLY_DARK_BLUE,
      textColour: COLOURS.LIGHT,
      image: <Vodafone />,
    },
    {
      // Cognito IQ
      title: lang.tiles.cognitoIq.title,
      subtitle: lang.tiles.cognitoIq.subtitle,
      bulletPoints: lang.tiles.cognitoIq.bulletPoints,
      imagePosition: POSITION.RIGHT,
      backgroundColour: COLOURS.BACKGROUND.DARK_BLUE,
      textColour: COLOURS.LIGHT,
      image: <CognitoIQ />,
    },
    {
      // IBM
      title: lang.tiles.ibm.title,
      subtitle: lang.tiles.ibm.subtitle,
      bulletPoints: lang.tiles.ibm.bulletPoints,
      imagePosition: POSITION.LEFT,
      backgroundColour: COLOURS.BACKGROUND.BLUE,
      textColour: COLOURS.LIGHT,
      image: <Ibm />,
    },
    {
      // TGM
      title: lang.tiles.tgm.title,
      subtitle: lang.tiles.tgm.subtitle,
      bulletPoints: lang.tiles.tgm.bulletPoints,
      imagePosition: POSITION.RIGHT,
      backgroundColour: COLOURS.BACKGROUND.TURQUOISE,
      textColour: COLOURS.LIGHT,
      image: <Tgm />,
    },
  ]);

  return (
    <Layout currentPage={PAGES.EMPLOYMENT}>

      <Seo title={PAGES.EMPLOYMENT} keywords={['gatsby', 'application', 'react']} />
      <TitlePanel
        title={lang.header.title}
        backgroundColour={COLOURS.LIGHT}
        textColour={COLOURS.BACKGROUND.REALLY_DARK_BLUE}
        textAlign={POSITION.CENTER}
      >
        { `"${lang.header.quote}" - ` }
        <i>{ lang.header.author }</i>
      </TitlePanel>

      <BulletImages tiles={tiles} />

      <FrequentlyAskedQuestions title={lang.faq.title} content={lang.faq.content} />
    </Layout>
  );
}
