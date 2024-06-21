export function allCyrillic(element: string): boolean {
  const cyrillicRegex = /^[\u0400-\u04FF]+$/;

  if (!cyrillicRegex.test(element)) {
    return false;
  }

  return true;
}
