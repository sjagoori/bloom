/**
 * Function converts cookie to object
 * @param {Cookie} str cookie
 * @returns cookie as object
 * @source https://www.30secondsofcode.org/js/s/parse-cookie
 */
export default function parseCookie(str) {
  return str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
}