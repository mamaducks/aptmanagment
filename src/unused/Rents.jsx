import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { SiteEnterRents } from "./SiteEnterRents";

export function Rents() {
  return (
    <Paper>
      {/* <Button href="/Rents/add" variant="contained" color="primary">
        Enter Rents
      </Button> */}
      <Button href="/Rents/enterdeposits" variant="contained" color="primary">
      Enter Deposits
      </Button>
      
<SiteEnterRents />
    </Paper>
  );
}