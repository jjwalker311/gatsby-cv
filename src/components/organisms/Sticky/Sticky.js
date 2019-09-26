import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import onScroll from 'helpers/onScroll';

import If from 'components/utils/If';

export default function Sticky({ whenToShow, children }) {
  const [inView, setInView] = useState(false);

  // On start of scroll, should view out of view
  const start = () => setInView(false);

  const stop = () => {
    if (whenToShow > document.documentElement.scrollTop) {
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
    const scrollCallBack = window.addEventListener('scroll', () => onScroll(start, stop, 500));

    return () => {
      // Tidy up after ourselves
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);

  // console.log(inView ? 'SHOW' : 'HIDE')

  return (
    <div css={css`
      position: fixed;
      width: 100%;
      z-index: 40;
    `}
    >
      <If condition={inView}>
        { children }
      </If>
    </div>
  );
}

Sticky.propTypes = {
  // Pixel value when to start showing sticky children
  whenToShow: PropTypes.number,
  // Sticky children to display
  children: PropTypes.node.isRequired,
};

Sticky.defaultProps = {
  whenToShow: (window.innerHeight / 2),
};
