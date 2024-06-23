/**
 * Проверяет, содержит ли строка как минимум два символа.
 *
 * @param {string} str - Строка, которую нужно проверить.
 * @returns {boolean} - Возвращает true, если строка содержит два или более символа, иначе false.
 */

export function checkMinTwoElements(str: string): boolean {
  return str.length >= 2;
}
