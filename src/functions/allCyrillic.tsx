/**
 * Проверяет, состоит ли строка полностью из кириллических символов.
 *
 * @param {string} element - Строка, которую нужно проверить.
 * @returns {boolean} - Возвращает true, если строка состоит только из кириллических символов, иначе false.
 */

export function allCyrillic(element: string): boolean {
  const cyrillicRegex = /^[\u0400-\u04FF]+$/;

  if (!cyrillicRegex.test(element)) {
    return false;
  }

  return true;
}
