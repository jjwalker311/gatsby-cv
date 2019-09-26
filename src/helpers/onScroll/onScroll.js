
let isScrolling = null;

/**
 * Triggers callback on stopping scrolling
 * @param  {function} startCallback=()=>{}
 * @param  {function} stopCallback=()=>{}
 * @param  {number} delay=100
 */
export default function onScroll(
  startCallback = () => {},
  stopCallback = () => {},
  delay = 100,
) {
  // Make sure callbacks have been provided
  if (!startCallback || typeof startCallback !== 'function') return;
  if (!stopCallback || typeof stopCallback !== 'function') return;

  if (isScrolling === null) {
    // Only null before we start scrolling
    startCallback();
  }

  window.clearTimeout(isScrolling);

  // Set a timeout to run after scrolling ends
  isScrolling = setTimeout(() => {
    // Re-initialise variable
    isScrolling = null;

    // Trigger the STOP callback
    stopCallback();
  }, delay);
}
