import { Applicant } from "./ApplicantList";
import DenseTable from "./Table";
import DataGridDemo from "./ApplicantTableGrid";
import WaitingListTable from "./Table";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import NewApplicantDialog from "./EnterApplicantDialog";
import UpdateApplicantDialog from "./UpdateApplicantDialog";
import MoveInDialog from "./MoveInDialog";
import { SiteSelect } from "./ApplicantSiteList";
import { SiteCheckboxes } from "../../App/Property/SiteCheckboxes";

export function Applicants() {
  return (
    <>
      <div>header: applicants</div>
      <div>add: new applicant</div>
      <div>remove: applicant</div>
      <div> reject approve </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <NewApplicantDialog />
          <div>search for applicant by name</div>
          {/* <UpdateApplicantDialog /> */}
          {/* <MoveInDialog /> */}
          <div>choose site to view waiting list</div>
          <SiteSelect />
        </ButtonGroup>
      </Box>

      <WaitingListTable />
      <div>filter table</div>
      <div>current waiting</div>
      <div>rejected</div>

      {/* <DataGridDemo /> */}
    </>
  );
}
