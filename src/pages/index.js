import React from 'react';
// import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import Spotlights from 'components/Spotlights';
import BulletedImage from 'components/BulletedImage';
import TitlePanel from 'components/TitlePanel';
import FrequentlyAskedQuestions from 'components/FrequentlyAskedQuestions';
import ResponsiveCTA from 'components/ResponsiveCTA';
import HomeBackground from 'components/background/Home';


import ReactIcon from 'assets/reactjs.svg';

import bulletImages from 'constants/bulletImages.json';
import faqContent from 'constants/faq.json';
import Image from 'components/image';

const IndexPage = () => {
  // const { t } = useTranslation();
  const items = [
    {
      SVG: ReactIcon,
      header: 'Try for 2 weeks',
      message: 'Get started with a razor & shave gel for just £3.95.',
    },
    {
      SVG: ReactIcon,
      header: 'Try for 2 weeks',
      message: 'Get started with a razor & shave gel for just £3.95.',
    },
    {
      SVG: ReactIcon,
      header: 'Try for 2 weeks',
      message: 'Get started with a razor & shave gel for just £3.95.',
    },
  ];

  return (
    <Layout>
      <TitlePanel title="SOME TITLE HERE SOME TITLE HERE" backgroundColour="pink" />
      <HomeBackground>
        <ResponsiveCTA buttonCaption="BUTTON" buttonOnClick={() => {}} title="Title title" description="Lorem 12312323123123 1231231231" />
      </HomeBackground>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <Spotlights items={items} title="Some Title" />
      {bulletImages.map(props => (
        <BulletedImage {...props} />
      ))}
      <FrequentlyAskedQuestions title="some title" content={faqContent} />
    </Layout>
  );
};

export default IndexPage;
