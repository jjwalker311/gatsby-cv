import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

import COLOURS from 'constants/colours';
import POSITIONS from 'constants/positions';
import BREAKPOINTS from 'constants/breakpoints';

import If from 'components/utils/If';

import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

export default function TitlePanel({
  title, backgroundColour, textColour, textAlign, children,
}) {
  return (
    <div
      css={css`
            text-align: center;
            height: 100%;
            padding: 6em 1em;
            background-color: ${backgroundColour};
            @media (min-width: ${BREAKPOINTS.TABLET}px) {
              padding: 2em 15em;
            }
        `}
    >
      <Heading colour={textColour} level={2}>
        { title }
      </Heading>

      <If condition={children}>
        {
          React.Children.map(children, child => (
            <Paragraph color={textColour} style={{ textAlign }} key={child}>
              { child }
            </Paragraph>
          ))
        }
      </If>
    </div>
  );
}

TitlePanel.propTypes = {
  // Mandatory title to be displayed
  title: PropTypes.string.isRequired,
  // Optional description
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  // Background colour
  backgroundColour: PropTypes.string,
  // Colour of the text (children/title)
  textColour: PropTypes.string,
  // Text alignment in the main body
  textAlign: PropTypes.oneOf([POSITIONS.LEFT, POSITIONS.CENTER, POSITIONS.RIGHT, POSITIONS.JUSTIFY]),
};

TitlePanel.defaultProps = {
  backgroundColour: COLOURS.PRIMARY,
  textColour: COLOURS.LIGHT,
  children: null,
  textAlign: POSITIONS.LEFT,
};
