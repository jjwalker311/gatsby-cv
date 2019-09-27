import React, { useState } from 'react';
import { css } from '@emotion/core';

import BREAKPOINTS from 'constants/breakpoints';
import * as PROP_TYPES from 'constants/propTypes';

import If from 'components/utils/If';

import get from 'helpers/get';

import {
  HamburgerSpan, HamburgerInput, HamburgerMenu, ClearBackground,
} from './styledChildren';


export default function Hamburger({ children }) {
  // Whether the Menu is expanded or not
  const [checked, setChecked] = useState(false);

  function handleMenuToggle(event) {
    // Pulling value from event
    const value = get(event, 'target.checked');

    // Updating state
    setChecked(value);
  }

  return (
    <>
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
            z-index: 20;
          `}
      >
        <HamburgerInput
          type="checkbox"
          name="menu-hamburger"
          checked={checked}
          onChange={handleMenuToggle}
        />

        <div>
          <HamburgerSpan checked={checked} />
          <HamburgerSpan checked={checked} />
          <HamburgerSpan checked={checked} />
        </div>

        <HamburgerMenu>
          {children(checked)}
        </HamburgerMenu>
      </div>

      <If condition={checked}>
        <ClearBackground onClick={() => setChecked(false)} />
      </If>
    </>
  );
}

Hamburger.propTypes = {
  children: PROP_TYPES.ANY_CHILDREN.isRequired,
};
