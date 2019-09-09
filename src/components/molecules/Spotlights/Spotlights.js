import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as PROP_TYPES from 'constants/propTypes';
import COLOURS from 'constants/colours';
import POSITION from 'constants/positions';
import BREAKPOINTS from 'constants/breakpoints';

import ResponsivePanel from 'components/molecules/ResponsivePanel';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';


function Spotlight({
  SVG, header, message, link,
}) {
  return (
    <div style={{ margin: '0 1em' }}>
      <Link to={link}>
        <SVG
          height={80}
          style={{
            display: 'block',
            margin: '0 auto',
          }}
        />
      </Link>

      <strong
        style={{
          display: 'block',
          margin: '1em auto 0',
        }}
      >
        {header}
      </strong>

      <Paragraph
        color={COLOURS.DARK}
        style={{
          margin: '0 auto 2em',
        }}
      >
        {message}
      </Paragraph>
    </div>
  );
}

Spotlight.propTypes = PROP_TYPES.SPOTLIGHT;

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
            <Spotlight {...props} key={`${i}${props.message}`} />
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
