import React, { useContext, useMemo } from 'react';

import TitlePanel from 'components/atoms/TitlePanel';
import PersonalBackground from 'components/atoms/Images/PersonalBackground';

import Layout from 'components/molecules/Layout';
import Seo from 'components/molecules/Seo';

import BulletImages from 'components/organisms/BulletImages';

import PAGES from 'constants/pages';
import COLOURS from 'constants/colours';
import POSITION from 'constants/positions';

import BorneoKids from 'components/atoms/Images/BorneoKids';
import Golf from 'components/atoms/Images/Golf';

import LocaleContext from 'locale';

export default function Personal() {
  const lang = useContext(LocaleContext).personal;

  const tiles = useMemo(() => [
    // Golf
    {
      title: lang.tiles.golf.title,
      subtitle: lang.tiles.golf.subtitle,
      bulletPoints: lang.tiles.golf.bulletPoints,
      imagePosition: POSITION.RIGHT,
      backgroundColour: COLOURS.BACKGROUND.REALLY_DARK_BLUE,
      textColour: COLOURS.LIGHT,
      image: <Golf />,
    },
    // Borneo
    {
      title: lang.tiles.borneo.title,
      subtitle: lang.tiles.borneo.subtitle,
      bulletPoints: lang.tiles.borneo.bulletPoints,
      imagePosition: POSITION.LEFT,
      backgroundColour: COLOURS.BACKGROUND.DARK_BLUE,
      textColour: COLOURS.LIGHT,
      image: <BorneoKids />,
    },
  ]);

  return (
    <Layout currentPage={PAGES.ABOUT_ME}>
      <Seo title={PAGES.ABOUT_ME} keywords={['gatsby', 'application', 'react']} />

      <TitlePanel
        title={lang.header.title}
        backgroundColour={COLOURS.BACKGROUND.DARK_BLUE}
        textColour={COLOURS.LIGHT}
        textAlign={POSITION.CENTER}
      >
        { `"${lang.header.quote}" - ` }
        <i>{ lang.header.author }</i>
      </TitlePanel>

      <PersonalBackground />

      <TitlePanel
        title={lang.header.title}
        backgroundColour={COLOURS.LIGHT}
        textColour={COLOURS.DARK}
        textAlign={POSITION.CENTER}
      >
          BLAH
      </TitlePanel>

      <BulletImages tiles={tiles} />

      <TitlePanel
        title={lang.header.title}
        backgroundColour={COLOURS.LIGHT}
        textColour={COLOURS.DARK}
        textAlign={POSITION.CENTER}
      >
          BLAH
      </TitlePanel>
    </Layout>
  );
}
