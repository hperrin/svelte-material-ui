export function exclude<T extends { [k: string]: any }>(
  obj: T,
  keys: string[]
): Partial<T> {
  let names = Object.getOwnPropertyNames(obj);
  const newObj: Partial<T> = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf('$');
    if (
      cashIndex !== -1 &&
      keys.indexOf(name.substring(0, cashIndex + 1)) !== -1
    ) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name as keyof Partial<T>] = obj[name];
  }

  return newObj;
}
