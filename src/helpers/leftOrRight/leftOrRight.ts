import POSITION from 'constants/positions';

/**
 * Places a component either before/after another
 * Result can be placed directly into render method
 * @param  {Component} Constant
 * @param  {Component} Variable
 * @param  {String} position
 */
export default function leftOrRight(
  Constant: import('React').ReactElement,
  Variable: import('React').ReactElement,
  position: string) {
  const container = [
    Constant,
  ];

  // Adding Variable either before or after the Constant
  container[position === POSITION.LEFT ? 'unshift' : 'push'](Variable);

  return container;
}
