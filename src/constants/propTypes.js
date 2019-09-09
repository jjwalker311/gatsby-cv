import PropTypes from 'prop-types';

export const TABS = PropTypes.arrayOf(
  PropTypes.shape({
    caption: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
);

export const ANY_CHILDREN = PropTypes.arrayOf(PropTypes.any);

export const SPOTLIGHT = PropTypes.shape({
  SVG: PropTypes.func,
  header: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.string,
});

export const FAQ_CONTENT = PropTypes.shape({
  question: PropTypes.string,
  answer: PropTypes.string,
});
