import DateTimePicker from "@mui/lab/DateTimePicker";
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Select,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  getApplicantFormData,
  getApplicantsWithNameMap,
} from "../state/applicants";
import {
  applicantAccomodationsData,
  applicantEthnicityData,
  applicantGendersData,
  applicantIncomeLevelData,
  applicantRaceData,
  applicantStatusData,
} from "../state/data/applicants";
import { Reference } from "../state/data/reference";
import {
  removeItemAtIndex,
  replaceItemAtIndex,
} from "../state/helpers/dataHelpers";
import { getSitesMap, getSitesWithTenantMap } from "../state/sites";
import { Delete, Check } from "@mui/icons-material";
import { EMPTY_APPLICANT } from "../state/applicants";
import { DatePicker } from "@mui/lab";
import { getTenantFormData } from "../state/tenants";

export function FormTenant({ applicantId, siteId, unitId, onClose }) {
  const appplicant = useRecoilValue(getApplicantsWithNameMap).get(applicantId);

  const [tenantInfo, setTenantInfo] = useRecoilState(
    getTenantFormData({ siteId, unitId, applicantId })
  );

  const [item, setItem] = useState(tenantInfo);

  console.log({ applicantId }, tenantInfo);

  const canSumbit = true; // add validation
  const sitesMap = useRecoilValue(getSitesWithTenantMap);

  const allUnits = sitesMap
    .get(item.siteId)
    .units.filter((item) => !item.tenant);

  const setFieldValue = useCallback(
    (name, value) => {
      console.log(name, value);

      value !== null &&
        setItem((currentItem) => ({ ...currentItem, [name]: value }));
    },
    [setItem]
  );

  const updateSite = useCallback(
    (newSiteId) => {
      setFieldValue("siteId", newSiteId);
      setFieldValue("unitId", undefined);
    },
    [setFieldValue]
  );

  const handleSubmit = useCallback(() => {
    setTenantInfo(item);

    onClose();
  }, [item, onClose, setTenantInfo]);

  return (
    <>
      <DialogTitle>Move In Applicant - {appplicant.applicantsName}</DialogTitle>

      <DialogContent>
        <Stack direction="column" gap={4}>
          <Stack>
            <FormControl fullWidth>
              <FormLabel>Site</FormLabel>

              <Select
                value={item.siteId}
                onChange={({ target: { value } }) => updateSite(value)}
              >
                {[...sitesMap.values()].map((site) => (
                  <MenuItem key={site.siteId} value={site.siteId}>
                    {site.siteName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <FormLabel>Unit</FormLabel>

              <Select
                value={item.unitId || ''}
                onChange={({ target: { value } }) =>
                  setFieldValue("unitId", value)
                }
              >
                {allUnits.map((unit) => (
                  <MenuItem key={unit.unitId} value={unit.unitId}>
                    {unit.unitId}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>

          <Stack>
            <FormControl>
              <FormLabel>Move In Date</FormLabel>

              <DatePicker
                renderInput={(props) => <TextField {...props} />}
                value={item.dateMoveIn}
                onChange={(newValue) => {
                  setFieldValue("dateMoveIn", newValue.getTime());
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Lease Date</FormLabel>

              <DatePicker
                renderInput={(props) => <TextField {...props} />}
                value={item.dateLease}
                onChange={(newValue) => {
                  setFieldValue("dateLease", newValue.getTime());
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Lease Renewal Date</FormLabel>

              <DatePicker
                renderInput={(props) => <TextField {...props} />}
                value={item.dateRenewal}
                onChange={(newValue) => {
                  setFieldValue("dateRenewal", newValue.getTime());
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
          Submit
        </Button>

        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </>
  );
}
