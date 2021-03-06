import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/core';

import COLOURS from 'constants/colours';
import BREAKPOINTS from 'constants/breakpoints';

export default function Paragraph(props: InferProps<typeof Paragraph.propTypes>) {
  const {
    children,
    bold,
    color,
    fontSize,
    style,
    overrideCss,
    className,
  } = props;

  return (
    <p
      style={style!}
      className={className!}
      css={css`
            color: ${color};
            font-weight: ${bold ? 'bold' : 'normal'};
            font-size: ${fontSize! + 1}px;
            @media (min-width: ${BREAKPOINTS.TABLET}px) {
              font-size: ${fontSize}px;
            }
            ${overrideCss}
        `}
    >
      { children }
    </p>
  );
}

Paragraph.propTypes = {
  // Contents of Heading
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  // Whether to be bold or not
  bold: PropTypes.bool,
  // Text colour
  color: PropTypes.string,
  // Size of the font "X"px
  fontSize: PropTypes.number,
  // Optional CSS style override
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  // CSS to override defaults
  overrideCss: PropTypes.string,
  // CSS className to be passed to child
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  bold: false,
  color: COLOURS.LIGHT,
  fontSize: 15,
  style: {},
  overrideCss: '',
  className: '',
};
