export default function parseQueryString(raw) {
  // We have a raw query string in correct format
  if (!(raw && raw.length > 0 && raw.indexOf('?') === 0)) return {};

  // Removing first "?" and Splitting into Array on "&"
  const rawArray = raw.substring(1, raw.length).split('&');

  // Reducing array into single object
  return rawArray.reduce((curr, param) => {
    // Splitting on "="
    const [key, value] = param.split('=');

    // Something has gone wrong
    if (!(key && value)) return curr;

    // Reduce to key/value pair
    return {
      ...curr,
      [key]: value,
    };
  }, {});
}
