import React, { useContext } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/core';

import ResponsivePanel from 'components/atoms/ResponsivePanel';
import Paragraph from 'components/atoms/Paragraph';
import Hyperlink from 'components/atoms/Hyperlink';

import BREAKPOINTS from 'constants/breakpoints';
import COLOURS from 'constants/colours';

import LocaleContext from 'locale';

export default function Footer(props: InferProps<typeof Footer.propTypes>) {
  const {
    background,
  } = props;

  const { footer: lang } = useContext(LocaleContext);

  return (
    <div css={css`
            background: ${background};
            margin-bottom: 1em;
        `}
    >
      <ResponsivePanel
        breakpointAction={BREAKPOINTS.TABLET}
        textAlign="center"
        itemAlign="center"
        responsiveStructure="1fr 1fr"
      >
        <div>
          <Paragraph bold color={COLOURS.DARK} fontSize={12}>
            { lang.description }
          </Paragraph>
        </div>

        <div>
          <Paragraph bold color={COLOURS.DARK} fontSize={12}>
            { lang.contacts }
          </Paragraph>

          <Hyperlink href="https://www.linkedin.com/in/jonathan-j-walker/" fontSize={12}>
            { lang.linkedIn }
          </Hyperlink>

          <Hyperlink href="https://github.com/jjwalker311/gatsby-cv/tree/master/src" fontSize={12}>
            { lang.github }
          </Hyperlink>
        </div>

      </ResponsivePanel>
    </div>
  );
}

Footer.propTypes = {
  background: PropTypes.string,
};

Footer.defaultProps = {
  background: COLOURS.BACKGROUND.GREY,
};
