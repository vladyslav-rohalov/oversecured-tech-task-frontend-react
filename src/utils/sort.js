export function sortByName(a, b) {
  if (a.firstName > b.firstName) return 1;
  if (a.firstName < b.firstName) return -1;
  return 0;
}

export function sortByNameReverse(a, b) {
  if (a.firstName < b.firstName) return 1;
  if (a.firstName > b.firstName) return -1;
  return 0;
}

export function sortBySurname(a, b) {
  if (a.lastName > b.lastName) return 1;
  if (a.lastName < b.lastName) return -1;
  return 0;
}

export function sortBySurnameReverse(a, b) {
  if (a.lastName < b.lastName) return 1;
  if (a.lastName > b.lastName) return -1;
  return 0;
}

export function sortByDate(a, b) {
  if (a.createdAt > b.createdAt) return 1;
  if (a.createdAt < b.createdAt) return -1;
  return 0;
}

export function sortByDateReverse(a, b) {
  if (a.createdAt < b.createdAt) return 1;
  if (a.createdAt > b.createdAt) return -1;
  return 0;
}
