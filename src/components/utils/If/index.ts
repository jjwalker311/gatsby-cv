import PropTypes, { InferProps } from 'prop-types';

/**
 * Renders children if condition is met
 */
export default function If({ condition, children }: InferProps<typeof If.propTypes>) {
  return condition ? children : null;
}

If.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.any,
};
