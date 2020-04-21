import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

export default function Quote({ quote, author }: InferProps<typeof Quote.propTypes>) {
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
