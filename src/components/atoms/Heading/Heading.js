import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import POSITION from 'constants/positions';
import COLOURS from 'constants/colours';

export default function Heading(props) {
  const {
    level,
    children,
    colour,
    bold,
    textAlign,
  } = props;

  const Tag = `h${level}`;
  return (
    <Tag
      css={css`
        color: ${colour};
        font-weight: ${bold ? 'bold' : 'normal'};
        text-align: ${textAlign};
      `}
    >
      { children }
    </Tag>
  );
}

Heading.propTypes = {
  // Contents of Heaing
  children: PropTypes.node.isRequired,
  // Level of Heading (H1, H2, H3...)
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // Whether to be bold or not
  bold: PropTypes.bool,
  // Text colour
  colour: PropTypes.string,
  // Where to align text
  textAlign: PropTypes.string,
};

Heading.defaultProps = {
  bold: false,
  colour: COLOURS.LIGHT,
  level: 2,
  textAlign: POSITION.CENTER,
};
