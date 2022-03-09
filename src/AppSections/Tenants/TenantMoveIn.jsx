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
  import {
    
    useRecoilState,
    useRecoilValue,
  } from "recoil";
  import { tenantState } from "../../data/applicantAtoms";
  import { useCallback, useState } from "react";
  
  export function Tenant() {
    const [tenant, setTenant] = useRecoilState(tenantState);
    //const index = applicantList.findIndex((listItem) => listItem === item);
    const [item, setItem] = useState({});
//   const applicant = useRecoilValue();
    console.log("item", tenant, item);
  
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
  
    const addTenant = useCallback(() => {
      setTenant((tenants) => [...tenants, item]);
    }, [item, setTenant]);
  
    return (
      <Paper sx={{p: "30px"}}>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <TextField
              fullWidth
              {...addProps({ name: "dateLease", label: "Lease Date" })}
            />
            <div>autoFill with lease date entry 1 year out but editable</div>
             <TextField
              fullWidth
              {...addProps({ name: "renewsOn", label: "Renewal Date" })}
            />
          </Box>
  
          <FormControl>
          <div>autoFilled</div>
            <FormLabel id="status">Tenant Info</FormLabel>
           
          </FormControl>
        </Stack>
   
        <Box sx={{ width: "850px" }}>
            
          <TextField fullWidth margin="normal" {...addProps({ name: "name", label: "Name" })} />
        </Box>
        <Stack direction="row" gap={4}>
            
          <Box sx={{ width: "500px" }}>
            <TextField
              fullWidth
              margin="normal"
              {...addProps({ name: "phone", label: "Phone", type: "number" })}
            />
          </Box>
          <FormControl margin="normal">
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
          </FormControl>
        </Stack>
  
        <Box display="flex" gap={7}>
         
  
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
        <Stack sx={{ border: "1px solid black", p: 1 }}>
  
          <Stack direction="row" gap={7}>
  
            <FormControl margin="dense">
              <FormLabel id="familySize">Family Size</FormLabel>
              <div>other tenants on property</div>
              <RadioGroup
                row
                defaultValue=""
                {...addProps({ name: "familySize", label: "Family Size" })}
              >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
              </RadioGroup>
            </FormControl>
  
            {/* <FormControl margin="dense">
              <FormLabel id="occupancy">Occupancy</FormLabel>
  
              <RadioGroup
                row
                defaultValue="1"
                {...addProps({ name: "beds", label: "Beds" })}
              >
                <FormControlLabel value="1" control={<Radio />} label="1 bed" />
                <FormControlLabel value="2" control={<Radio />} label="2 bed" />
              </RadioGroup>
            </FormControl> */}
  
          </Stack>
  
          <FormControl margin="dense" >
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
          </FormControl>
        </Stack>
        {/* <TextField
          {...addProps({ name: "incomeLevel", label: "Income Level" })}
        /> */}
  
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
        </Stack>
        <TextField
              margin="normal"
              {...addProps({ name: "site", label: "Site", type: "text" })}
            />
                 <TextField
              margin="normal"
              {...addProps({ name: "unit", label: "Unit", type: "string" })}
            />

        {/* <input type="text" value={item.text} onChange={editItemText} />
  
        <input
          type="checkbox"
          checked={item.isPending}
          onChange={toggleItemStatus}
        />
  
        <button onClick={deleteItem}>X</button> */}
        <button onClick={addTenant}>Add</button>
      </Paper>
    );
  }