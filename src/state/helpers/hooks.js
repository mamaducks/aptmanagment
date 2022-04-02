import { makeStyles } from "@mui/styles";
import { useMemo } from "react";

export const useStyles = makeStyles(() => ({
  negative: { color: "red" },
  positive: { color: "green" },
  boldness: {
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bolder",
    },
  },

}));

export function useColumns(columns) {
  const { boldness, positive, negative } = useStyles();

  return useMemo(
    () =>
      columns.map((column) => ({
        headerClassName: boldness,
        cellClassName: column.highlightPositiveNegative
          ? ({ value }) => (value >= 0 ? positive : negative)
          : "",
        ...column,
      })),
    [boldness, positive, negative, columns]
  );
}

