export const dateFormatter = ({ value }) => {
  if (!value) {
    return "";
  }

  return new Date(value).toLocaleDateString();
};
