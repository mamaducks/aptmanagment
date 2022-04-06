import {  format,  getMonth, getYear } from "date-fns";
import { compact, groupBy, sortBy } from "lodash";

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

export function mapPropsToOptions(obj) {
  return Object.entries(obj).map(([label, value]) => ({ label, value }));
}

export function getDataUpdater(idGetter) {
  return (items, { id, field, value }) => {
    const existing = items.find((item) => idGetter(item) === id);

    return updateState(
      items,
      (item) => idGetter(item) === id,
      { ...existing, [field]: value },
      false
    );
  };
}

export function getYearMonthDateMap(items, valueFn = () => undefined) {
  const itemsWithValue = compact(items.filter((item) => !!valueFn(item))).map(
    (item) => {
      const _value = new Date(valueFn(item));

      return {
        ...item,
        _value,
        _month: getMonth(_value),
        _year: getYear(_value),
      };
    }
  );

  const sortedItems = sortBy(itemsWithValue, "_value");

  const yearMonthGrouped = groupBy(sortedItems, "_year");

  Object.keys(yearMonthGrouped).forEach((year) => {
    const rows = yearMonthGrouped[year];

    // yearMonthGrouped[year] = new Map(Object.entries(groupBy(rows, "_month")));
    yearMonthGrouped[year] = groupBy(rows, "_month");
  });

  return yearMonthGrouped;

  // return new Map(Object.entries(yearMonthGrouped));
}

export function getCurrentMonthYear() {
  const year = getYear(Date.now());
  const month = getMonth(Date.now());

  return [year, month];
}

export function getCurrentMonthYearLabel() {
  const [year] = getCurrentMonthYear();

  return `${format(Date.now(), "LLLL")} ${year}`;
}

// export function getCurrentDate() {
//   // const year = getYear(Date.now());
//   // const month = getMonth(Date.now())
//   const Date = getDate
// }