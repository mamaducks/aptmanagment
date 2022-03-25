import {
  Box,
  FormControl,
  FormLabel,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { tenantList } from "../data/tenantAtoms";
import { useCallback, useState } from "react";
import { getAllSitesInfo } from "../data/siteAtoms";
import {
  applicantListState,
  APPROVED,
  PENDING,
  REJECTED,
  WITHDRAWL,
  getApplicantInfo,
} from "../data/applicantAtoms";
import { SiteSelect } from "./ApplicantSiteSelect";

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function MoveInApplicant({ applicantId }) {
  const [tenants, setTenants] = useRecoilState(tenantList);

  const [applicantList, setApplicantList] = useRecoilState(applicantListState);

  const applicantInfo = useRecoilValue(getApplicantInfo(applicantId));
  const existingTenantIndex = tenants.findIndex(
    (listItem) => listItem.applicantId === applicantId
  );
  const existingTenant = tenants[existingTenantIndex];

  const [item, setItem] = useState({ applicantId, ...existingTenant });

  //   const applicant = useRecoilValue();
  console.log("item", tenants, item);

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

  const updateTenant = useCallback(() => {
    if (existingTenant) {
      setTenants((current) =>
        replaceItemAtIndex(current, existingTenantIndex, item)
      );
    } else {
      setTenants((current) => [...current, item]);
    }
  }, [item, existingTenantIndex, setTenants]);

  return (
    <Paper sx={{ p: "30px" }}>
        <Stack direction="row" gap={4}>
          <div>autoFilled</div>

          <FormLabel>Tenant Info</FormLabel>
        </Stack>
<Stack direction="row" gap={4} SX={{width: "100%"}}>
        {/* <Box sx={{ width: "850px" }}> */}
          <TextField
            fullWidth
            disabled
            margin="normal"
            value={applicantInfo?.name}
          />
          <TextField
            fullWidth
            disabled
            margin="normal"
            value={applicantInfo?.phone}
          />
        {/* </Box> */}

        </Stack>

        <SiteSelect
          selectedSite={item.siteId}
          selectedUnit={item.unitId}
          onSiteChange={(newSite, newUnit) =>
            setItem((item) => ({ ...item, siteId: newSite, unitId: newUnit }))
          }
        />
        <Stack  gap={4}>
          <TextField
            {...addProps({ name: "moveInDate", label: "Move In Date" })}
          />
          <TextField
            {...addProps({ name: "dateLease", label: "Lease Date" })}
          />

          <TextField
            {...addProps({ name: "renewalDate", label: "Renewal Date" })}
          />
        </Stack>

      <button onClick={updateTenant}>Add</button>
    </Paper>
  );
}
