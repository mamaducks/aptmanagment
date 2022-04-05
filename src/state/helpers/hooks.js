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
  highlight: {
    backgroundColor: "#eaf4fa",
  },
}));

export function useColumns(columns) {
  const { boldness, positive, highlight, negative } = useStyles();

  return useMemo(
    () =>
      columns.map((column) => ({
        headerClassName: boldness,
        cellClassName:
          column.highlightPositiveNegative || column.highlight
            ? ({ value }) =>
                column.highlightPositiveNegative
                  ? value >= 0
                    ? positive
                    : negative
                  : column.highlight
                  ? highlight
                  : ""
            : "",
        ...column,
      })),
    [boldness, highlight, positive, negative, columns]
  );
}
