import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import * as PROP_TYPES from 'constants/propTypes';
import COLOURS from 'constants/colours';
import POSITION from 'constants/positions';
import BREAKPOINTS from 'constants/breakpoints';

import ResponsivePanel from 'components/atoms/ResponsivePanel';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

function Spotlight({
  SVG, header, message, link,
}) {
  return (
    <div css={css`
        padding: 1em;

        @media (min-width: ${BREAKPOINTS.TABLET}px) {
          &:hover {
            transition: box-shadow 0.3s ease-in-out;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
          }
        }
      `}
    >
      <Link to={link}>
        <SVG
          height={80}
          style={{
            display: 'block',
            margin: '0 auto',
          }}
        />
        <strong
          style={{
            display: 'block',
            margin: '1em auto 0',
          }}
        >
          {header}
        </strong>
      </Link>

      <Paragraph
        color={COLOURS.DARK}
        style={{
          margin: '0 auto',
        }}
      >
        {message}
      </Paragraph>
    </div>
  );
}

Spotlight.propTypes = { ...PROP_TYPES.SPOTLIGHT };

Spotlight.defaultProps = {
  link: '/',
};

export default function Spotlights({ items, title }) {
  return (
    <div>
      <Heading
        level={2}
        colour={COLOURS.DARK}
        textAlign={POSITION.CENTER}
      >
        {title}
      </Heading>

      <ResponsivePanel
        breakpointAction={BREAKPOINTS.TABLET}
        textAlign="center"
        itemAlign="center"
        responsiveStructure={`repeat(${items.length}, 1fr)`}
      >
        {
          items.map(({ ...props }, i) => (
            <Spotlight {...props} key={`${items[i].message}`} />
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
