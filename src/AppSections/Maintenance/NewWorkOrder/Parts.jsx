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
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { getAllParts } from "../../../data/partsAtom";
import { useCallback, useState } from "react";
import { getPartsInfo } from "../../../data/partsAtom"


function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function Parts( { partId} ) {
  const [partsList, setPartsList] = useRecoilState(getAllParts);
  //const index = applicantList.findIndex((listItem) => listItem === item);
  const [part, setPart] = useState({});



    const oldPartsList = useRecoilValue(getPartsInfo(partId));
    const index = partsList.findIndex(
      (listItem) => listItem.partId === partId
    );
    const [item, setItem] = useState(oldPartsList || {});

  console.log("item", partsList, part);

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
        setPart((item) => ({ ...item, [name]: value }));

      return {
        label,
        name,
        type,
        onChange: setFieldValue,
        value: part[name] || '',
      };
    },
    [part]
  );

  const addPart = useCallback(() => {
  setPartsList((current) => replaceItemAtIndex(current, index, item));
}, [item, index, setPartsList]);

  return (
    <Paper sx={{ p: "30px" }}  >
      <Stack direction="row" gap={4}>
        <Box sx={{ width: "500px" }}>
          <TextField
            fullWidth
            {...addProps({ name: "partName", label: "Part" })}
          />
        </Box>
      </Stack>
      <Stack direction="row"></Stack>
      <Box sx={{ width: "850px" }}>
        <TextField
          fullWidth
          margin="normal"
          {...addProps({ name: "partPrice", label: "Price" })}
        />
      </Box>

      <button onClick={addPart}>Submit</button>
      <br />
      <div> entered parts list</div>
    </Paper>
  );
}
