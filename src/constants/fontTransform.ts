interface FontTransformObject {
  [name: string]: string
}
const FONT_TRANSFORM: FontTransformObject = Object.freeze({
  UPPER: 'uppercase',
  LOWER: 'lowercase',
  NONE: 'none',
});


export default FONT_TRANSFORM;
