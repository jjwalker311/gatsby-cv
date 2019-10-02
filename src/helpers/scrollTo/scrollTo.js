import get from 'helpers/get';

/**
 * Scrolls to given ref
 * @param  {object} ref
 */
export default function scrollToRef(ref) {
  window.scrollTo(0, get(ref, 'current.offsetTop'));
}
