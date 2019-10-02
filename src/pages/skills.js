import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import TitlePanel from 'components/atoms/TitlePanel';
import Quote from 'components/atoms/Quote';

import Layout from 'components/molecules/Layout';
import Spotlights from 'components/molecules/Spotlights';
import Seo from 'components/molecules/Seo';


import PAGES from 'constants/pages';
import COLOURS from 'constants/colours';
import POSITION from 'constants/positions';

import CodingIcon from 'assets/coding.svg';
import LeadershipIcon from 'assets/leadership.svg';
import TestingIcon from 'assets/testing.svg';

import LocaleContext from 'locale';

/**
 * Render styled content
 */
function RenderContent({ content }) {
  return content.map(text => (
    <div style={{ margin: '1em 0' }}>
      { text }
    </div>
  ));
}

RenderContent.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default function Skills() {
  const lang = useContext(LocaleContext).skills;

  const spotlights = [
    {
      SVG: CodingIcon,
      header: lang.spotlights.coding.header,
      message: lang.spotlights.coding.message,
      link: null,
    },
    {
      SVG: TestingIcon,
      header: lang.spotlights.testing.header,
      message: lang.spotlights.testing.message,
      link: null,
    },
    {
      SVG: LeadershipIcon,
      header: lang.spotlights.leadership.header,
      message: lang.spotlights.leadership.message,
      link: null,
    },
  ];

  return (
    <Layout currentPage={PAGES.SKILLS}>
      <Seo title={PAGES.SKILLS} keywords={['gatsby', 'application', 'react']} />

      <TitlePanel
        title={lang.header.title}
        backgroundColour={COLOURS.BACKGROUND.TURQUOISE}
        textColour={COLOURS.LIGHT}
        textAlign={POSITION.CENTER}
      >
        <Quote
          quote={lang.header.quote}
          author={lang.header.author}
        />
      </TitlePanel>

      <Spotlights items={spotlights} title={spotlights.title} />

      <TitlePanel title={lang.content.coding.title} backgroundColour={COLOURS.BACKGROUND.REALLY_DARK_BLUE}>
        <RenderContent content={lang.content.coding.paragraphs} />
      </TitlePanel>

      <TitlePanel title={lang.content.testing.title} backgroundColour={COLOURS.BACKGROUND.DARK_BLUE}>
        <RenderContent content={lang.content.testing.paragraphs} />
      </TitlePanel>

      <TitlePanel title={lang.content.leadership.title} backgroundColour={COLOURS.BACKGROUND.BLUE}>
        <RenderContent content={lang.content.leadership.paragraphs} />
      </TitlePanel>

      <TitlePanel title={lang.content.random.title} backgroundColour={COLOURS.BACKGROUND.TURQUOISE}>
        <RenderContent content={lang.content.random.paragraphs} />
      </TitlePanel>
    </Layout>
  );
}
