export function prefixFilter(
  obj: { [k: string]: any },
  prefix: string
): { [k: string]: any } {
  let names = Object.getOwnPropertyNames(obj);
  const newObj: { [k: string]: any } = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }

  return newObj;
}
