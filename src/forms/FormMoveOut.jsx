import { DatePicker } from "@mui/lab";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getApplicantsWithNameMap } from "../state/applicants";
import { getSitesWithTenantMap } from "../state/sites";
import { getTenantFormData } from "../state/tenants";

export function FormMoveOut({ applicantId, siteId, unitId, onClose }) {
  const applicant = useRecoilValue(getApplicantsWithNameMap).get(applicantId);

  const [tenantInfo, setTenantInfo] = useRecoilState(
    getTenantFormData({ siteId, unitId, applicantId })
  );

  const [item, setItem] = useState(tenantInfo);

  const canSumbit = !!item.dateMoveOut?.length;
  // const canSumbit = true; // add validation
//   const sitesMap = useRecoilValue(getSitesWithTenantMap);

 

  const setFieldValue = useCallback(
    (name, value) => {
      console.log(name, value);

      value !== null &&
        setItem((currentItem) => ({ ...currentItem, [name]: value }));
    },
    [setItem]
  );



  const handleCancel = useCallback(() => {
    setTenantInfo({ ...item, dateMoveOut: "" });

    onClose();
  }, [item, onClose, setTenantInfo]);

  const handleSubmit = useCallback(() => {
    setTenantInfo(item);

    onClose();
  }, [item, onClose, setTenantInfo]);

  return (
    <>
      <DialogTitle>Move Tenant Out - {applicant.applicantsName}</DialogTitle>

      <DialogContent>
        <Stack direction="column" gap={4}>
          <Stack>
            <FormControl>
              <FormLabel>Site</FormLabel>
              <TextField
                margin="normal"
                // label={siteRents.unitId}
                value={applicant.siteName}
                // defaultValue="unitId"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Unit</FormLabel>
              <TextField
                margin="normal"
                // label={siteRents.unitId}
                value={applicant.unitId}
                // defaultValue="unitId"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FormControl>
          </Stack>

          <Stack>
            <FormControl>
              <FormLabel>Move Out Date</FormLabel>

              <DatePicker
                renderInput={(props) => <TextField {...props} />}
                value={item.dateMoveOut}
                onChange={(newValue) => {
                  setFieldValue("dateMoveOut", newValue?.getTime());
                }}
              />
            </FormControl>
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!canSumbit}
        >
          Move Out
        </Button>
        <Button onClick={handleCancel}>Cancel</Button>

        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </>
  );
}
