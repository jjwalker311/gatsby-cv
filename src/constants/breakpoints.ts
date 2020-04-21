interface BreakpointObject {
  [name: string]: number
}

const BREAKPOINTS: BreakpointObject = Object.freeze({
  TABLET: 768,
  DESKTOP: 1024,
});

export default BREAKPOINTS;
