import React from 'react';
import { css } from '@emotion/core';

import BREAKPOINTS from 'constants/breakpoints';
import * as PROP_TYPES from 'constants/propTypes';

import { HamburgerSpan, HamburgerInput, HamburgerMenu } from './styledChildren';

export default function Hamburger({ children }) {
  return (
    <div
      css={css`
          display: block;
          @media (min-width: ${BREAKPOINTS.TABLET}px) {
            display: none;
          }
          display: block;
          position: relative;
          z-index: 1;
          -webkit-user-select: none;
          user-select: none;
        `}
    >
      {/* <!-- Checkbox is used as click receiver, so you can use the :checked selector on it.-->  eslint-disable-line max-len */}
      <HamburgerInput type="checkbox" />
      <HamburgerSpan />
      <HamburgerSpan />
      <HamburgerSpan />

      <HamburgerMenu>
        {children}
      </HamburgerMenu>
    </div>
  );
}

Hamburger.propTypes = {
  children: PROP_TYPES.ANY_CHILDREN.isRequired,
};
