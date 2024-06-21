export function checkMinTwoElements(str: string): boolean {
  const elements = str.split(" ");

  return elements.length >= 2;
}
