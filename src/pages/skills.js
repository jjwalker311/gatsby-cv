import React, { useContext, useMemo } from 'react';

import TitlePanel from 'components/atoms/TitlePanel';

import Layout from 'components/molecules/Layout';

import PAGES from 'constants/pages';
import COLOURS from 'constants/colours';
import POSITION from 'constants/positions';

import LocaleContext from 'locale';

export default function Skills() {
  const lang = useContext(LocaleContext).skills;

  return (
    <Layout currentPage={PAGES.SKILLS}>
      <TitlePanel
        title={lang.header.title}
        backgroundColour={COLOURS.BACKGROUND.TURQUOISE}
        textColour={COLOURS.LIGHT}
        textAlign={POSITION.CENTER}
      >
        { `"${lang.header.quote}" - ` }
        <i>{ lang.header.author }</i>
      </TitlePanel>
    </Layout>
  );
}
