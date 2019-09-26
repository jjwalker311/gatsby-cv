import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import onScroll from 'helpers/onScroll';

import If from 'components/utils/If';

/**
 * Gets Scroll top - Tested on Chrome, Safari and Firefox
 */
function getScrollTop() {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

// Sticky wrapper, will render childen after user has stopped scroll to defined point
export default function Sticky({ children, delay, whenToShow }) {
  // Boolean value to hide/show children
  const [inView, setInView] = useState(false);

  // On START of scroll, should view out of view
  const start = () => setInView(false);

  // On STOP of scroll, setInView depending on where we're scrolled to
  const stop = (minPx) => {
    if (minPx > getScrollTop()) {
      // Sets to FALSE, if we're within top half of page
      setInView(false);
    } else {
      // Sets to TRUE, if we're below top half of page
      setInView(true);
    }
  };

  // Add scroll listener ONCE on initial render
  useEffect(() => {
    // Pass start/stop callbacks to onScroll handler, along with a delay to trigger the "stop" callback
    const scrollCallBack = window.addEventListener('scroll', () => onScroll(
      start,
      // Only has access to window when mounted
      () => stop(window.innerHeight * whenToShow),
      delay,
    ));

    return () => {
      // Tidy up after ourselves
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);

  return (
    <div
      css={css`
      position: fixed;
      width: 100%;
      z-index: 40;

      transform: translateY(-100%);
      transition: transform 300ms ease-in-out;

      ${inView && `
        transform: translateY(0);
        transition: transform 300ms ease-in-out;
      `}
    `}
    >
      { children }
    </div>
  );
}

Sticky.propTypes = {
  // Sticky children to display
  children: PropTypes.node.isRequired,
  // Delay "stop" callback on scroll finish
  delay: PropTypes.number,
  // When to start to show children, fraction of 100vh (1/2, 1/3, 3/2 etc... )
  whenToShow: PropTypes.number,
};

Sticky.defaultProps = {
  // Delay 1 second before displaying children
  delay: 1000,
  // Show when scrolled one third of page
  whenToShow: 1 / 2,
};
