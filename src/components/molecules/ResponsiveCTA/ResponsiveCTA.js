import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import ResponsivePanel from 'components/molecules/ResponsivePanel';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import MyFace from 'components/atoms/Images/MyFace';
import OnlyDisplayWhen from 'components/utils/OnlyDisplayWhen';

import renderLeftOrRight from 'helpers/leftOrRight';

import BREAKPOINTS from 'constants/breakpoints';
import POSITION from 'constants/positions';
import FONT_TRANSFORM from 'constants/fontTransform';
import PAGES from 'constants/pages';
import COLOURS from 'constants/colours';
import PAGES_URL from 'constants/pageUrl';

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
      <div style={{ paddingBottom: '4em' }}>
        <MyFaceMobile />
        <Heading level={2} bold>{ title }</Heading>
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
  // CTA Button caption
  buttonCaption: PropTypes.string.isRequired,
  // Title of CTA
  title: PropTypes.string,
  // Description of CTA
  description: PropTypes.string,
};

CallToAction.defaultProps = {
  title: '',
  description: '',
};

function MyFaceMobile() {
  return (
    <OnlyDisplayWhen mobile>
      <MyFace />
    </OnlyDisplayWhen>
  );
}

function MyFaceDesktop() {
  return (
    <div>
      <OnlyDisplayWhen desktop>
        <div style={{ marginBottom: '8em' }}>
          <MyFace />
        </div>
      </OnlyDisplayWhen>
    </div>
  );
}

export default function ResponsiveCTA({ positionCTA, ...props }) {
  return (
    <ResponsivePanel
      breakpointAction={BREAKPOINTS.TABLET}
      textAlign="center"
      itemAlign="center"
      responsiveStructure="1fr 1fr"
    >
      {
          renderLeftOrRight(<MyFaceDesktop />, <CallToAction {...props} />, positionCTA)
      }
    </ResponsivePanel>
  );
}

ResponsiveCTA.propTypes = {
  // Where we want the CTA to live, RIGHT or LEFT
  positionCTA: PropTypes.string,
};

ResponsiveCTA.defaultProps = {
  positionCTA: POSITION.RIGHT,
};
