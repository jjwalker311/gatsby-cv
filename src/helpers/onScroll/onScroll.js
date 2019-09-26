
/**
 * onScroll Helper
 */
export default function onScroll() {
  // Initialising variable
  this.isScrolling = null;

  /**
     * onScroll hander method
 * Triggers callback on stopping scrolling
 * @param  {function} startCallback=()=>{}
 * @param  {function} stopCallback=()=>{}
 * @param  {number} delay=100
 */
  this.handler = (
    startCallback = () => {},
    stopCallback = () => {},
    delay = 100,
  ) => {
    // Make sure callbacks have been provided
    if (!startCallback || typeof startCallback !== 'function') return;
    if (!stopCallback || typeof stopCallback !== 'function') return;

    if (this.isScrolling === null) {
      // Only null before we start scrolling
      startCallback();
    }

    window.clearTimeout(this.isScrolling);

    // Set a timeout to run after scrolling ends
    this.isScrolling = setTimeout(() => {
      // Re-initialise variable
      this.isScrolling = null;

      // Trigger the STOP callback
      stopCallback();
    }, delay);
  };
}
