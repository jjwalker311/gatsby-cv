import React from 'react';
import PropTypes from 'prop-types';
// import { css } from '@emotion/core';

export default function Hyperlink({ href, children, fontSize }) {
  return (
    <a href={href} style={{ margin: '0 0.5em', fontSize }}>
      { children }
    </a>
  );
}

Hyperlink.propTypes = {
  // Where to link to
  href: PropTypes.string.isRequired,
  // Font size
  fontSize: PropTypes.number,
  // What to render within the Link, either plain text or JSX
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Hyperlink.defaultProps = {
  fontSize: 12,
};
