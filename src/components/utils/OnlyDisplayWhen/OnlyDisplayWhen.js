import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import BREAKPOINTS from 'constants/breakpoints';

/**
 * Conditionally renders Children based on Mobile and Desktop boolean props
 */
export default function OnlyDisplayWhen({
  children, cssOverrides, mobile, desktop, cssDisplayWhenShown,
}) {
  // Show CSS override OR just display inherit
  const cssToDisplay = cssOverrides || css`
    display:${cssDisplayWhenShown};
  `;

  return (
    <div
      css={css`
                ${mobile ? cssToDisplay : 'display: none;'}
                @media (min-width: ${BREAKPOINTS.TABLET}px) {
                  ${desktop ? cssToDisplay : 'display: none;'}
                }
            `}
    >
      { children }
    </div>
  );
}

OnlyDisplayWhen.propTypes = {
  // Children to be conditionally rendered
  children: PropTypes.node.isRequired,
  // CSS Style overrides
  cssOverrides: PropTypes.shape({ root: PropTypes.string.isRequired }),
  // Whether to display on Mobile
  mobile: PropTypes.bool,
  // Whether to display on Desktop
  desktop: PropTypes.bool,
  // When we want to show the Div, how should it be shown? inline/block...
  cssDisplayWhenShown: PropTypes.string,
};

OnlyDisplayWhen.defaultProps = {
  cssOverrides: null,
  mobile: false,
  desktop: false,
  cssDisplayWhenShown: 'inherit',
};