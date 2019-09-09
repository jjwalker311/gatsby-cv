import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import COLOURS from 'constants/colours';
import BREAKPOINTS from 'constants/breakpoints';

export default function Paragraph(props) {
  const {
    children,
    bold,
    color,
    fontSize,
    style,
  } = props;

  return (
    <p
      style={style}
      css={css`
            color: ${color};
            font-weight: ${bold ? 'bold' : 'normal'};
            font-size: ${fontSize + 3}px;
            @media (min-width: ${BREAKPOINTS.TABLET}px) {
              font-size: ${fontSize}px;
            }
        `}
    >
      { children }
    </p>
  );
}

Paragraph.propTypes = {
  // Contents of Heaing
  children: PropTypes.node.isRequired,
  // Whether to be bold or not
  bold: PropTypes.bool,
  // Text colour
  color: PropTypes.string,
  // Size of the font "X"px
  fontSize: PropTypes.number,
  // Optional CSS style override
  style: PropTypes.object,
};

Paragraph.defaultProps = {
  bold: false,
  color: COLOURS.LIGHT,
  fontSize: 15,
  style: {},
};
