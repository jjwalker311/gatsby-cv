import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import COLOURS from 'constants/colours';
import POSITION from 'constants/positions';
import BREAKPOINTS from 'constants/breakpoints';

import ResponsivePanel from 'components/atoms/ResponsivePanel';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

import If from 'components/utils/If';

function ImageAndTitle({ SVG, title }) {
  return (
    <>
      <SVG
        height={80}
        width={80}
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
        { title }
      </strong>
    </>
  );
}

ImageAndTitle.propTypes = {
  SVG: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};


function Spotlight({
  SVG, header, message, link,
}) {
  const showAsLink = !!link;

  return (
    <div css={css`
        padding: 1em;

        @media (min-width: ${BREAKPOINTS.TABLET}px) {
          ${showAsLink ? `&:hover {
            transition: box-shadow 0.3s ease-in-out;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
          ` : ''}}
        }
      `}
    >
      <If condition={showAsLink}>
        <Link to={link} style={{ textDecoration: 'none' }}>
          <ImageAndTitle SVG={SVG} title={header} />
        </Link>
      </If>

      <If condition={!showAsLink}>
        <ImageAndTitle SVG={SVG} title={header} />
      </If>

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

Spotlight.propTypes = {
  SVG: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  link: PropTypes.string,
};

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
          items.map(({ ...props }) => (
            <Spotlight {...props} key={props.message} />
          ))
        }
      </ResponsivePanel>
    </div>
  );
}

Spotlights.propTypes = {
  items: PropTypes.arrayOf({
    SVG: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
};
