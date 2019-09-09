import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import ResponsivePanel from 'components/molecules/ResponsivePanel';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

import renderLeftOrRight from 'helpers/leftOrRight';

import {
  BREAKPOINTS, POSITION, FONT_TRANSFORM, PAGES, COLOURS, PAGES_URL,
} from 'constants';
import { CENTRE_CENTRE } from 'helpers/cssSnippets';

function CallToAction({
  buttonCaption, title, description,
}) {
  return (
    <div css={css`
      display: flex;
      ${CENTRE_CENTRE}
      height: calc(100vh - 55px);
      margin: 2em;
  `}>
      <div style={{ paddingBottom: '8em' }}>
        <Heading level={1} bold>{ title }</Heading>
        <Paragraph bold fontSize={16}>{ description }</Paragraph>
        <Button bold textTransform={FONT_TRANSFORM.UPPER}>
          <Link
            to={`/${PAGES_URL[PAGES.ABOUT_ME]}`}
            css={css`
              text-decoration: none;
              color: ${COLOURS.LIGHT};
            `}
          >
            { buttonCaption }
          </Link>
        </Button>
      </div>
    </div>
  );
}

CallToAction.propTypes = {
  buttonCaption: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

CallToAction.defaultProps = {
  title: '',
  description: '',
};


export default function ResponsiveCTA({ positionCTA, ...props }) {
  return (
    <ResponsivePanel
      breakpointAction={BREAKPOINTS.TABLET}
      textAlign="center"
      itemAlign="center"
      responsiveStructure="1fr 1fr"
    >
      {
          renderLeftOrRight(<div />, <CallToAction {...props} />, positionCTA)
      }
    </ResponsivePanel>
  );
}

ResponsiveCTA.propTypes = {
  positionCTA: PropTypes.string,
};

ResponsiveCTA.defaultProps = {
  positionCTA: POSITION.RIGHT,
};
