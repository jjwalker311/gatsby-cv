/**
 * Recursively get value from Object
 * @param  {object} obj
 * @param  {Array} keyArray
 * @param  {any} defaultValue
 */
function safelyGet(obj, keyArray, defaultValue) {
  const currentLevelValue = obj[keyArray[0]];

  if (currentLevelValue === undefined) {
    // End of line, NOT defined
    return defaultValue;
  }

  if (keyArray.length === 1) {
    return obj[keyArray];
  }
  // Removing current value
  keyArray.shift();

  return safelyGet(currentLevelValue, keyArray, defaultValue);
}

export default function get(obj, key, defaultValue = null) {
  if (!obj || key === null || key === undefined || typeof key !== 'string') {
    return defaultValue;
  }

  // Spiltting on full stops
  const keyAsArray = key.split('.');

  return safelyGet(obj, keyAsArray, defaultValue);
}
