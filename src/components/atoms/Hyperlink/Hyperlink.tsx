import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

export default function Hyperlink({ href, children, fontSize }: InferProps<typeof Hyperlink.propTypes>) {
  return (
    <a href={href} style={{ margin: '0 0.5em', fontSize: fontSize! }}>
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
