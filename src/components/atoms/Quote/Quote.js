import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ quote, author }) {
  const parseQuote = `"${quote}" - `;
  return (
    <React.Fragment>
      {parseQuote}
      <i>{ author }</i>
    </React.Fragment>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
