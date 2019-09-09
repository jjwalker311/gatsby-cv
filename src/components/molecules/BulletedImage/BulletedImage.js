import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import ResponsivePanel from 'components/molecules/ResponsivePanel';

import renderLeftOrRight from 'helpers/leftOrRight';

import BREAKPOINTS from 'constants/breakpoints';
import POSITION from 'constants/positions';

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
function BulletList({ title, bulletPoints }) {
  return (
    <div style={{ margin: '1em' }}>
      <h2>{title}</h2>
      <ul>
        {
            bulletPoints.map(point => <li>{point}</li>)
        }
      </ul>
    </div>
  );
}

BulletList.propTypes = {
  title: PropTypes.string.isRequired,
  bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function BulletedImage({ image, imagePosition, ...props }) {
  return (
    <div>
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
  title: PropTypes.string.isRequired,
  bulletPoints: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imagePosition: PropTypes.oneOf([POSITION.LEFT, POSITION.RIGHT]),
};

BulletedImage.defaultProps = {
  imagePosition: POSITION.LEFT,
};
