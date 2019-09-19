import React, { useContext } from 'react';

import TitlePanel from 'components/atoms/TitlePanel';
import HomeBackground from 'components/atoms/Images/HomeBackground';

import Layout from 'components/molecules/Layout';
import Seo from 'components/molecules/Seo';
import Spotlights from 'components/molecules/Spotlights';
import ResponsiveCTA from 'components/molecules/ResponsiveCTA';

import PAGES from 'constants/pages';
import PAGES_URL from 'constants/pageUrl';
import COLOURS from 'constants/colours';

import EducationIcon from 'assets/education.svg';
import WorkIcon from 'assets/work.svg';
import SkillsIcon from 'assets/skills.svg';

// import faqContent from 'constants/faq.json';

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

  return (
    <Layout currentPage={PAGES.HOME}>
      <Seo title={PAGES.HOME} keywords={['gatsby', 'application', 'react']} />

      <HomeBackground>
        <ResponsiveCTA
          buttonCaption={lang.button}
          title={lang.title}
          description={lang.description}
        />
      </HomeBackground>

      <Spotlights items={items} title={lang.spotlights.title} />

      <TitlePanel title={lang.aboutSite.title} backgroundColour={COLOURS.BACKGROUND.DARK_BLUE}>
        {
          lang.aboutSite.paragraph.map(paragraph => (
            <div style={{ margin: '1em 0' }}>
              { paragraph }
            </div>
          ))
        }
      </TitlePanel>
    </Layout>
  );
};

export default IndexPage;
