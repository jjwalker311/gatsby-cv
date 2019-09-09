import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import COLOURS from 'constants/colours';
import FONT_SIZES from 'constants/fontSizes';
import FONT_TRANSFORM from 'constants/fontTransform';

export default function Button(props) {
  const {
    onClick,
    children,
    textTransform,
    color,
    fontSize,
    background,
    backgroundHover,
    bold,
  } = props;

  return (
    <button
      onClick={onClick}
      type="button"
      css={css`
          color: ${color};
          font-size: ${fontSize};
          font-weight: ${bold ? 'bold' : 'normal'};
          text-transform: ${textTransform};
          background: ${background};
          border: none;
          border-radius: 4px;
          padding: 1em 3em;

          &:hover {
            background: ${backgroundHover};
          }
        `}
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  // Text displayed within button
  children: PropTypes.string.isRequired,
  // Function triggered on click
  onClick: PropTypes.func,
  // Whether to display caption in all CAPS
  textTransform: PropTypes.string,
  // Text colour
  color: PropTypes.string,
  // Size of font
  fontSize: PropTypes.oneOf([...FONT_SIZES]),
  // Whether to be bold or not
  bold: PropTypes.bool,
  // Background colour
  background: PropTypes.string,
  // Background colour on hover
  backgroundHover: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  textTransform: FONT_TRANSFORM.NONE,
  color: COLOURS.LIGHT,
  bold: false,
  background: COLOURS.BUTTON.DEFAULT,
  backgroundHover: COLOURS.BUTTON.HOVER,
  fontSize: FONT_SIZES.MEDIUM,
};
