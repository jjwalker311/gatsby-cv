import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import ResponsivePanel from 'components/atoms/ResponsivePanel';
import Paragraph from 'components/atoms/Paragraph';
import Hyperlink from 'components/atoms/Hyperlink';

import BREAKPOINTS from 'constants/breakpoints';
import COLOURS from 'constants/colours';

export default function Footer(props) {
  const {
    background,
  } = props;

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
                        © JonathanJWalker, Inc. All Rights Reserved.
          </Paragraph>
        </div>
        <div>
          <Paragraph bold color={COLOURS.DARK} fontSize={12}>
                        CONTACT
          </Paragraph>
          <Hyperlink href="https://www.linkedin.com/in/jonathan-j-walker/" fontSize={12}>
                        LinkedIn
          </Hyperlink>
          <Hyperlink href="https://github.com/jjwalker311/gatsby-cv/tree/master/src" fontSize={12}>
                        Github (for this site)
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
  background: COLOURS.BACKGROUND.GRAY,
};
