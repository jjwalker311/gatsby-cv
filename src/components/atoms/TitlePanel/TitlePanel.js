import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

import COLOURS from 'constants/colours';
import BREAKPOINTS from 'constants/breakpoints';


export default function TitlePanel({ title, backgroundColour, textColour }) {
  return (
    <div>
      <div
        css={css`
            text-align: center;
            height: 100%;
            padding: 6em 0;
            background-color: ${backgroundColour};
            @media (min-width: ${BREAKPOINTS.TABLET}px) {
              padding: 2em 0;
            }
        `}
      >
        <h2 css={css`color: ${textColour};`}>
          { title }
        </h2>
      </div>

    </div>
  );
}

TitlePanel.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundColour: PropTypes.string,
  textColour: PropTypes.string,
};

TitlePanel.defaultProps = {
  backgroundColour: COLOURS.PRIMARY,
  textColour: COLOURS.LIGHT,
};
