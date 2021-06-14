/**
 * @title Get age in year format
 * @description Gets date object from user and transform it in a numerical value
 * @param {Date} birthday
 * @returns {Number} Age
 */
export default function getAge(birthday) {
  const birthDate = new Date(birthday)
  const today = new Date()
  return today.getFullYear() - birthDate.getFullYear()
}