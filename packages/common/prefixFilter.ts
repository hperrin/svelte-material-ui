export function prefixFilter<
  T extends { [k: string]: any },
  R extends { [k: string]: any }
>(obj: T, prefix: string): R {
  let names = Object.getOwnPropertyNames(obj);
  const newObj: R = {} as R;

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length) as keyof R] = obj[name];
    }
  }

  return newObj;
}
