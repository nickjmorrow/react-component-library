export const hasDuplicates = (list: any[]): boolean => {
  return list.filter((el, i, arr) => arr.findIndex(el) !== i).length > 0;
};
