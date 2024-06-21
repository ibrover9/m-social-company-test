export function checkLastCharacterNumber(str: string): boolean {
  if (str.length !== 18) {
    return false;
  }

  if (str.charAt(17) !== "_") {
    return true;
  }

  return false;
}
