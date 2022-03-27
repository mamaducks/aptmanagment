import { useCallback, useState } from "react";
import { TextField } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export function EnterRents() {
  const [item, setItem] = useState({});

  const addProps = useCallback(
    ({ name, label, type = "text" }) => {
      const setFieldValue = ({ target: { name, value } }) =>
        setItem((item) => ({ ...item, [name]: value }));

      return {
        label,
        name,
        type,
        onChange: setFieldValue,
        value: item[name],
      };
    },
    [item]
  );

  return (
    <List
      key="index"
      sx={{
        bgcolor: "background.paper",
        textAlign: "center",
        alignSelf: "center",
      }}
      subheader={
        <ListSubheader>Site Name Date or Month Enter Rents</ListSubheader>
      }
    >
      <ListItem divider sx={{ gap: 3 }}>
        <ListItemText id="applicantId" primary="tenant name" />
        <ListItemText id="unit" primary="unit" />
        <TextField
          variant="outlined"
          id="amountDue"
          label="Amount Due"
          sx={{ display: "flex", width: 450 }}
          {...addProps({ name: "amountDue", label: "Amount Due" })}
        >
          Amount Due
        </TextField>

        <TextField
          variant="outlined"
          {...addProps({ name: "amount", label: "Amount Paid" })}
          id="amount"
          label="Amount Paid"
          sx={{ justifyContent: "end", display: "flex", width: 450 }}
        >
          Amount Paid
        </TextField>
      </ListItem>
    </List>
  );
}
