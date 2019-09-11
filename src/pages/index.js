import React from 'react';
// import { useTranslation } from 'react-i18next';
import Layout from 'components/molecules/Layout';
import SEO from 'components/molecules/Seo';
import Spotlights from 'components/molecules/Spotlights';
import BulletedImage from 'components/molecules/BulletedImage';
import TitlePanel from 'components/atoms/TitlePanel';
import FrequentlyAskedQuestions from 'components/molecules/FrequentlyAskedQuestions';
import ResponsiveCTA from 'components/molecules/ResponsiveCTA';
import HomeBackground from 'components/atoms/Images/HomeBackground';

import PAGES from 'constants/pages';
import PAGES_URL from 'constants/pageUrl';
import COLOURS from 'constants/colours';


import EducationIcon from 'assets/education.svg';
import WorkIcon from 'assets/work.svg';
import SkillsIcon from 'assets/skills.svg';

import Edinburgh from 'components/atoms/Images/Edinburgh';
import NorthernIreland from 'components/atoms/Images/NorthernIreland';

import bulletImages from 'constants/bulletImages.json';
import faqContent from 'constants/faq.json';

const IndexPage = () => {
  // const { t } = useTranslation();
  const items = [
    {
      SVG: WorkIcon,
      header: 'Employment',
      message: 'Get started with a razor & shave gel for just £3.95.',
      link: PAGES_URL[PAGES.EMPLOYMENT],
    },
    {
      SVG: EducationIcon,
      header: 'Education',
      message: 'Get started with a razor & shave gel for just £3.95.',
      link: PAGES_URL[PAGES.EDUCATION],
    },
    {
      SVG: SkillsIcon,
      header: 'Skills',
      message: 'Get started with a razor & shave gel for just £3.95.',
      link: PAGES_URL[PAGES.SKILLS],
      backgroundColour: COLOURS.BACKGROUND.BLUE,
      textColour: COLOURS.LIGHT,
    },
  ];

  bulletImages[0].image = <Edinburgh />;
  bulletImages[1].image = <NorthernIreland />;
  bulletImages[2].image = <Edinburgh />;

  bulletImages[0].backgroundColour = COLOURS.BACKGROUND.BLUE;
  bulletImages[0].textColour = COLOURS.LIGHT;

  bulletImages[1].backgroundColour = COLOURS.BACKGROUND.DARK_BLUE;
  bulletImages[1].textColour = COLOURS.LIGHT;

  bulletImages[2].backgroundColour = COLOURS.BACKGROUND.REALLY_DARK_BLUE;
  bulletImages[2].textColour = COLOURS.LIGHT;

  return (
    <Layout>
      <HomeBackground>
        <ResponsiveCTA buttonCaption="About Me" buttonOnClick={() => {}} title="Hey, I'm Jonathan Walker" description="Lorem 12312323123123 1231231231 Lorem 12312323123123 1231231231 Lorem 12312323123123 1231231231 Lorem 12312323123123 1231231231" />
      </HomeBackground>
      <TitlePanel title="SOME TITLE HERE SOME TITLE HERE" backgroundColour="pink" description="Lorem 12312323123123 1231231231 Lorem 12312323123123" />
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <Spotlights items={items} title="Professional Snapshots" />
      <div>
        {bulletImages.map(props => (
          <BulletedImage {...props} />
        ))}
      </div>
      <FrequentlyAskedQuestions title="Some title" content={faqContent} />
    </Layout>
  );
};

export default IndexPage;
