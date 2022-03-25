import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export function Management() {
  return (
    <Paper>
      <Button href="/Management/sites" variant="contained" color="primary">
        Company Sites
      </Button>

      <Button href="/Management/rents" variant="contained" color="primary">
        View Rent Summary
      </Button>

      <Button href="/Management/employees" variant="contained" color="primary">
        View Employees
      </Button>
    </Paper>
  );
}
