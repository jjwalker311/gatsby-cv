import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Heading from 'components/atoms/Heading';

import ResponsivePanel from 'components/molecules/ResponsivePanel';

import renderLeftOrRight from 'helpers/leftOrRight';

import BREAKPOINTS from 'constants/breakpoints';
import POSITION from 'constants/positions';
import COLOURS from 'constants/colours';

/**
 * Wrapper to ensure the Image always appears first in the Grid
 * @param  {object} {children}
 */
function ImageWrapper({ children }) {
  return (
    <div
      css={css`
        grid-row: 1 / auto;
        @media (min-width: ${BREAKPOINTS.TABLET}px) {
          grid-row: auto;
        }
      `}
    >
      { children }
    </div>
  );
}

ImageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Maps Array of bullet points
 */
function BulletList({
  title, bulletPoints, textColour,
}) {
  return (
    <div style={{ padding: '1em' }}>
      <Heading level={2} colour={textColour}>{title}</Heading>
      <ul>
        {
            bulletPoints.map(point => <li style={{ color: textColour }}>{point}</li>)
        }
      </ul>
    </div>
  );
}

BulletList.propTypes = {
  // Title of section
  title: PropTypes.string.isRequired,
  // Array of bullet points
  bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Colour of text
  textColour: PropTypes.string.isRequired,
};

export default function BulletedImage({
  image, imagePosition, backgroundColour, ...props
}) {
  return (
    <div style={{ background: backgroundColour }}>
      <ResponsivePanel responsiveStructure="1fr 1fr">
        {
          renderLeftOrRight(
            <BulletList {...props} />,
            <ImageWrapper>
              { image }
            </ImageWrapper>,
            imagePosition,
          )
        }
      </ResponsivePanel>
    </div>
  );
}

BulletedImage.propTypes = {
  // Image to display alongside BulletPoints
  image: PropTypes.string.isRequired,
  // Image position, either LEFT or RIGHT
  imagePosition: PropTypes.oneOf([POSITION.LEFT, POSITION.RIGHT]),
  // Title of section
  title: PropTypes.string.isRequired,
  // Array of bullet points
  bulletPoints: PropTypes.arrayOf(PropTypes.string),
  // Colour of the background
  backgroundColour: PropTypes.string,
  // Colour of text
  textColour: PropTypes.string,
};

BulletedImage.defaultProps = {
  imagePosition: POSITION.LEFT,
  bulletPoints: [],
  backgroundColour: COLOURS.LIGHT,
  textColour: COLOURS.DARK,
};
