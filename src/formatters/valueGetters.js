
export const fullNameValueGetter = ({ row }) => {
  return `${row.firstName || ""} ${row.lastName || ""}`;
};
