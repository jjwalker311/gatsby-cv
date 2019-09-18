import React, { useContext, useMemo } from 'react';

import TitlePanel from 'components/atoms/TitlePanel';

import Seo from 'components/molecules/Seo';
import Layout from 'components/molecules/Layout';

import BulletImages from 'components/organisms/BulletImages';

import PAGES from 'constants/pages';
import COLOURS from 'constants/colours';
import POSITION from 'constants/positions';

import Edinburgh from 'components/atoms/Images/Edinburgh';
import NorthernIreland from 'components/atoms/Images/NorthernIreland';
import OtherEducation from 'components/atoms/Images/OtherEducation';

import LocaleContext from 'locale';

export default function Education() {
  const lang = useContext(LocaleContext).education;

  const tiles = useMemo(() => ([
    {
      // Primary/Grammar School
      title: lang.tiles.primaryGrammar.title,
      bulletPoints: lang.tiles.primaryGrammar.bulletPoints,
      imagePosition: POSITION.LEFT,
      backgroundColour: COLOURS.BACKGROUND.BLUE,
      textColour: COLOURS.LIGHT,
      image: <NorthernIreland />,
    },
    {
      // Tertiary education
      title: lang.tiles.tertiary.title,
      bulletPoints: lang.tiles.tertiary.bulletPoints,
      imagePosition: POSITION.RIGHT,
      backgroundColour: COLOURS.BACKGROUND.DARK_BLUE,
      textColour: COLOURS.LIGHT,
      image: <Edinburgh />,
    },
    {
      // Further learning
      title: lang.tiles.other.title,
      bulletPoints: lang.tiles.other.bulletPoints,
      imagePosition: POSITION.RIGHT,
      backgroundColour: COLOURS.BACKGROUND.TURQUOISE,
      textColour: COLOURS.LIGHT,
      image: <OtherEducation />,
    },
  ]));

  return (
    <Layout currentPage={PAGES.EDUCATION}>
      <Seo title={PAGES.EDUCATION} keywords={['gatsby', 'application', 'react']} />

      <TitlePanel
        title={lang.header.title}
        backgroundColour={COLOURS.BACKGROUND.REALLY_DARK_BLUE}
        textAlign={POSITION.CENTER}
      >
        { `"${lang.header.quote}" - ` }
        <i>{ lang.header.author }</i>
      </TitlePanel>

      <BulletImages tiles={tiles} />
    </Layout>
  );
}
