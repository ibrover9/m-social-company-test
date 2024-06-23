/**
 * Проверяет, является ли последний символ строки числом, если длина строки равна 18.
 *
 * @param {string} str - Строка, которую нужно проверить.
 * @returns {boolean} - Возвращает true, если последний символ строки не является символом '_', иначе false.
 */

export function checkLastCharacterNumber(str: string): boolean {
  if (str.length !== 18) {
    return false;
  }

  if (str.charAt(17) !== "_") {
    return true;
  }

  return false;
}
