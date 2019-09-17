import React, { useContext } from 'react';
import Layout from 'components/molecules/Layout';
import SEO from 'components/molecules/Seo';
import Spotlights from 'components/molecules/Spotlights';
import BulletedImage from 'components/molecules/BulletedImage';
import TitlePanel from 'components/atoms/TitlePanel';
import Paragraph from 'components/atoms/Paragraph';

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

import LocaleContext from 'locale';

const IndexPage = () => {

  const lang = useContext(LocaleContext).homepage;

  const items = [
    {
      SVG: WorkIcon,
      header: lang.spotlights.employment.header,
      message: lang.spotlights.employment.message,
      link: PAGES_URL[PAGES.EMPLOYMENT],
    },
    {
      SVG: EducationIcon,
      header: lang.spotlights.education.header,
      message: lang.spotlights.education.message,
      link: PAGES_URL[PAGES.EDUCATION],
    },
    {
      SVG: SkillsIcon,
      header: lang.spotlights.skills.header,
      message: lang.spotlights.skills.message,
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
    <Layout currentPage={PAGES.HOME}>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <HomeBackground>
        <ResponsiveCTA 
          buttonCaption={lang.button} 
          title={lang.title} 
          description={lang.description} 
        />
      </HomeBackground>
      <Spotlights items={items} title={lang.spotlights.title} />

      <TitlePanel title= {lang.aboutSite.title} backgroundColour={COLOURS.BACKGROUND.DARK_BLUE}>
        {lang.aboutSite.paragraph1} 
        <br/><br/>
        {lang.aboutSite.paragraph2} 
        <br/><br/>
        {lang.aboutSite.paragraph3} 
      </TitlePanel>

      {/* <div>
        {bulletImages.map(props => (
          <BulletedImage {...props} />
        ))}
      </div>
      <FrequentlyAskedQuestions title="Some title" content={faqContent} /> */}
    </Layout>
  );
};

export default IndexPage;
