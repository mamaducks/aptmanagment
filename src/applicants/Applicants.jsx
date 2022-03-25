import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { WaitList } from "./WaitList";

export function Applicants() {
  return (
    <Paper>

<Button href="/Applicants/new" variant="contained" color="primary">
        Add New Applicant
      </Button>

     <WaitList />

     
    </Paper>
  );
}