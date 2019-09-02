import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import * as PROP_TYPES from 'constants/propTypes';
import { BREAKPOINTS } from 'constants';

import ResponsivePanel from 'components/ResponsivePanel';

function Spotlight({ SVG, header, message }) {
  return (
    <div>
      <SVG
        height={80}
        css={css`
          display: block;
          margin: 0 auto;
      `}
      />

      <strong
        css={css`
          display: block;
          margin: 1em auto 0;
        `}
      >
        {header}
      </strong>

      <p
        css={css`
          display: block;
        `}
      >
        {message}
      </p>
    </div>
  );
}

Spotlight.propTypes = PROP_TYPES.SPOTLIGHT;

export default function Spotlights({ items, title }) {
  return (
    <div>
      <h2 css={css`
        margin-top: 1.5em;
        text-align: center;
      `}
      >
        {title}
      </h2>

      <ResponsivePanel
        breakpointAction={BREAKPOINTS.TABLET}
        textAlign="center"
        itemAlign="center"
        responsiveStructure={`repeat(${items.length}, 1fr)`}
      >
        {
          items.map(({ SVG, header, message }, i) => (
            <Spotlight SVG={SVG} header={header} message={message} key={`${i}${message}`} />
          ))
        }
      </ResponsivePanel>
    </div>
  );
}

Spotlights.propTypes = {
  items: PropTypes.arrayOf(PROP_TYPES.SPOTLIGHT).isRequired,
  title: PropTypes.string.isRequired,
};
