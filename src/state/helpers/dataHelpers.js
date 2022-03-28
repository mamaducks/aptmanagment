export function getId() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export function updateState(items, rowFind, newItem, isRemove) {
  const index = items.findIndex(rowFind);

  if (isRemove) {
    if (index !== -1) {
      return removeItemAtIndex(items, index);
    }

    return items;
  }

  if (index === -1) {
    return [...items, newItem];
  }

  return replaceItemAtIndex(items, index, newItem);
}
