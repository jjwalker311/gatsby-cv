import React, { useContext } from 'react';

import TitlePanel from 'components/atoms/TitlePanel';
import Quote from 'components/atoms/Quote';
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

  const tiles = [
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
  ];

  return (
    <Layout currentPage={PAGES.ABOUT_ME}>
      <Seo title={PAGES.ABOUT_ME} keywords={['gatsby', 'application', 'react']} />

      <TitlePanel
        title={lang.header.title}
        backgroundColour={COLOURS.BACKGROUND.DARK_BLUE}
        textColour={COLOURS.LIGHT}
        textAlign={POSITION.CENTER}
      >
        <Quote
          quote={lang.header.quote}
          author={lang.header.author}
        />
      </TitlePanel>

      <PersonalBackground />

      <TitlePanel
        title={lang.aboutMe.header.title}
        backgroundColour={COLOURS.LIGHT}
        textColour={COLOURS.BACKGROUND.REALLY_DARK_BLUE}
        textAlign={POSITION.CENTER}
      >
        { lang.aboutMe.header.children }
      </TitlePanel>

      <BulletImages tiles={tiles} />

      {/* <TitlePanel
        title={lang.aboutMe.footer.title}
        backgroundColour={COLOURS.LIGHT}
        textColour={COLOURS.DARK}
        textAlign={POSITION.CENTER}
      >
        { lang.aboutMe.footer.children }
      </TitlePanel> */}
    </Layout>
  );
}
