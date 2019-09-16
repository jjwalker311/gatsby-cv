import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

import COLOURS from 'constants/colours';
import BREAKPOINTS from 'constants/breakpoints';

import If from 'components/utils/If';

import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

export default function TitlePanel({
  title, backgroundColour, textColour, description,
}) {
  return (
    <div
      css={css`
            text-align: center;
            height: 100%;
            padding: 6em 1em;
            background-color: ${backgroundColour};
            @media (min-width: ${BREAKPOINTS.TABLET}px) {
              padding: 2em 0;
            }
        `}
    >
      <Heading css={css`color: ${textColour};`} level={2}>
        { title }
      </Heading>

      <If condition={!!description}>
        <Paragraph colour={textColour}>
          { description }
        </Paragraph>
      </If>
    </div>
  );
}

TitlePanel.propTypes = {
  // Mandatory title to be displayed
  title: PropTypes.string.isRequired,
  // Optional description
  description: PropTypes.string,
  // Background colour
  backgroundColour: PropTypes.string,
  // Colour of the text (description/title)
  textColour: PropTypes.string,
};

TitlePanel.defaultProps = {
  backgroundColour: COLOURS.PRIMARY,
  textColour: COLOURS.LIGHT,
  description: null,
};
