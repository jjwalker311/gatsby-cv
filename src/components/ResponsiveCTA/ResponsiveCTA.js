import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import ResponsivePanel from 'components/ResponsivePanel';

import renderLeftOrRight from 'helpers/leftOrRight';

import { BREAKPOINTS, POSITION } from 'constants';

function CallToAction({
  buttonCaption, buttonOnClick, title, description,
}) {
  return (
    <div css={css`
      padding: 3em 0 5em;
  `}>
      <h2>{ title }</h2>
      <p>{ description }</p>
      <button onClick={buttonOnClick} type="button">
        { buttonCaption }
      </button>
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
