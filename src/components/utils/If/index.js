import PropTypes from 'prop-types';

/**
 * Renders children if condition is met
 */
export default function If({ condition, children }) {
  return condition ? children : null;
}

If.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
