import {
  Box,
  Button,
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
  Typography,
} from "@mui/material";
import {
  RecoilRoot,
  atom,
  selector,
  useSetRecoilState,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useCallback, useState } from "react";
import {
  applicantListState,
  getApplicantInfo,
} from "../../data/applicantAtoms";

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function EnterTenant({ applicantId }) {
  const [tenants, setTenants] = useRecoilState(applicantListState);

  const oldApp = useRecoilValue(getApplicantInfo(applicantId));
  const index = tenants.findIndex(
    (listItem) => listItem.applicantId === applicantId
  );
  const [item, setItem] = useState(oldApp || {});

  console.log("item", tenants, item);
  // const toggleItemStatus = () => {
  //   const newList = replaceItemAtIndex(applicantList, index, {
  //     ...item,
  //     isPending: !item.isPending,
  //   });

  //   setApplicantList(newList);
  // };

  // const deleteItem = () => {
  //   const newList = removeItemAtIndex(applicantList, index);

  //   setApplicantList(newList);
  // };
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
    setTenants((current) => replaceItemAtIndex(current, index, item));
  }, [item, index, setTenants]);

  return (
    // <Paper sx={{ p: "30px" }}>
    <Box sx={{ px: "30px", py: "5px" }}>
      <Typography variant="h5" textAlign="center">
        Edit Current Employee
      </Typography>
      <Box sx={{ width: "500px" }}>
        <TextField
          margin="dense"
          fullWidth
          {...addProps({ name: "dateLease", label: "Date of Lease" })}
        />
           <TextField
            fullWidth
            {...addProps({ name: "renewsOn", label: "Renewal Date" })}
          />
      </Box>

      <Stack direction="row" gap={4}>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "firstName", label: "First Name" })}
          />
        </Box>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "lastName", label: "Last Name" })}
          />
        </Box>

        <Box sx={{ width: "500px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "phone", label: "Phone" })}
          />
        </Box>
      </Stack>
      <Stack direction="row" gap={4}>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "site", label: "Site" })}
          />
        </Box>
        <Box sx={{ width: "850px" }}>
          <TextField
            fullWidth
            margin="normal"
            {...addProps({ name: "unit", label: "Unit" })}
          />
        </Box>
      </Stack>

    
      <Box display="flex" justifyContent="center" pt={1}>
        <Button size="large" variant="contained" onClick={updateTenant}>
          Add Tenant
        </Button>
      </Box>
    </Box>
  );
}
