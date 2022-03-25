import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { tenantList } from "../../../data/tenantAtoms";
import { useCallback, useState } from "react";
import { getAllSitesInfo } from "../../../data/siteAtoms";
import {
  applicantListState,
  APPROVED,
  PENDING,
  REJECTED,
  WITHDRAWL,
  getApplicantInfo,
} from "../../../data/applicantAtoms";
import { SiteSelect } from "../../../applicants/ApplicantSiteSelect";

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function MoveTenant({ applicantId }) {
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
        <Box sx={{ width: "500px" }}>
          <TextField
            fullWidth
            {...addProps({ name: "dateLease", label: "Lease Date" })}
          />

          <TextField
            fullWidth
            {...addProps({ name: "moveInDate", label: "Move In Date" })}
          />
         <TextField
            fullWidth
            {...addProps({ name: "dateLease", label: "Lease Date" })}
          />

          <TextField
            fullWidth
            {...addProps({ name: "renewalDate", label: "Renewal Date" })}
          />
        </Box>

        <FormControl>
          <div>autoFilled</div>

          <FormLabel id="status">Tenant Info</FormLabel>
        </FormControl>
      </Stack>

      <Box sx={{ width: "850px" }}>
        <TextField
          fullWidth
          disabled
          margin="normal"
          value={applicantInfo?.name}
        />
        
        {/* <TextField
          fullWidth
          margin="normal"
          {...addProps({ name: "firstName", label: "First Name" })}
        />

        <TextField
          fullWidth
          margin="normal"
          {...addProps({ name: "lastName", label: "Last Name" })}
        /> */}
      </Box>

      <Stack direction="row" gap={4}>
        {/* <Box sx={{ width: "500px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "phone", label: "Phone", type: "number" })}
          />
        </Box> */}

        {/* <FormControl margin="normal">
          <FormLabel id="gender">Gender</FormLabel>
          <div>autoFilled</div>
          <RadioGroup
            row
            defaultValue=""
            {...addProps({ name: "gender", label: "Gender" })}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl> */}
      </Stack>

      <SiteSelect
        selectedSite={item.siteId}
        selectedUnit={item.unitId}
        onSiteChange={(newSite, newUnit) =>
          setItem((item) => ({ ...item, siteId: newSite, unitId: newUnit }))
        }
      />

      {/* <Box display="flex" gap={7}>
        <FormControl>
          <FormLabel id="race">Race</FormLabel>
          <div>autoFilled</div>
          <RadioGroup
            row
            defaultValue=""
            {...addProps({ name: "race", label: "Race" })}
          >
            <FormControlLabel value="1" control={<Radio />} label="White" />
            <FormControlLabel value="2" control={<Radio />} label="Black" />
            <FormControlLabel value="3" control={<Radio />} label="Asian" />
            <FormControlLabel value="4" control={<Radio />} label="LatinX" />
          </RadioGroup>
        </FormControl>
      </Box>

      <FormControl margin="dense">
        <FormLabel id="familySize">Income Level</FormLabel>
        <RadioGroup
          row
          defaultValue=""
          {...addProps({ name: "familySize", label: "Family Size" })}
        >
          <FormControlLabel value="veryLow" control={<Radio />} label="VL" />
          <FormControlLabel value="Low" control={<Radio />} label="L" />
          <FormControlLabel value="Median" control={<Radio />} label="M" />
          <FormControlLabel value="High" control={<Radio />} label="H" />
        </RadioGroup>
      </FormControl> */}

      {/*       
      <Stack sx={{ border: "1px solid black", p: 1 }}>
        <FormControl>
          <FormLabel id="accomodate"> Rental Assistance</FormLabel>
          <FormGroup row>
            <FormControlLabel
              id="rentalAssistance"
              control={<Checkbox />}
              {...addProps({
                name: "rentalAssistance",
                label: "Yes or No",
              })}
            />
          </FormGroup>
        </FormControl>
      </Stack> */}

      {/* <Stack sx={{ border: "1px solid black", p: 1 }}>
        <Stack direction="row" gap={7}>
          <FormControl margin="dense">
            <FormLabel id="familySize">Add co-tenants</FormLabel>
            <div>other occupants moving in</div>
          </FormControl>

          <FormControl margin="dense">
              <FormLabel id="occupancy">Occupancy</FormLabel>
  
              <RadioGroup
                row
                defaultValue="1"
                {...addProps({ name: "beds", label: "Beds" })}
              >
                <FormControlLabel value="1" control={<Radio />} label="1 bed" />
                <FormControlLabel value="2" control={<Radio />} label="2 bed" />
              </RadioGroup>
            </FormControl> 
        </Stack>
      </Stack> */}
      {/* <TextField
          {...addProps({ name: "incomeLevel", label: "Income Level" })}
        /> */}

      {/* <input type="text" value={item.text} onChange={editItemText} />
  
        <input
          type="checkbox"
          checked={item.isPending}
          onChange={toggleItemStatus}
        />
  
        <button onClick={deleteItem}>X</button> */}
      <button onClick={updateTenant}>Add</button>
    </Paper>
  );
}
