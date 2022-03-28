import { compact } from "lodash";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const dateFormatter = ({ value }) => {
  if (!value) {
    return "";
  }

  return new Date(value).toLocaleDateString();
};

export const dateTimeFormatter = ({ value }) => {
  if (!value) {
    return "";
  }

  return new Date(value).toLocaleString();
};

export const currencyFormatter = ({ value }) => {
  if (!value) {
    return "";
  }

  return formatter.format(value);
};

export const timeFormatter = ({ value }) => {
  if (!value) {
    return "";
  }

  return new Date(value).toLocaleTimeString();
};

export const phoneFormatter = ({ value }) => {
  if (!value) {
    return "";
  }

  return String(value).replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
};

export const referenceFormatter =
  (referenceData = []) =>
  ({ value }) => {
    return referenceData.find((refItem) => refItem.value === value)?.label;
  };

export const referenceArrayFormatter =
  (referenceData = []) =>
  ({ value }) => {
    return compact(
      (value || []).map(
        (item) => referenceData.find((refItem) => refItem.value === item)?.label
      )
    ).join(", ");
  };

export const uppercaseFormatter = ({ value }) => {
  if (!value) {
    return "";
  }

  return String(value).toUpperCase();
};

export const yesNoFormatter = ({ value }) => {
  return !!value ? "Yes" : "No";
};
