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
import { sites } from "../state/sites";
import { Delete, Check } from "@mui/icons-material";
import { EMPTY_APPLICANT } from "../state/applicants";
import { DatePicker } from "@mui/lab";
import { getTenantFormData } from "../state/tenants";





export function FormUnit({ item, index, onItemChange }) {
    const setFieldValue = useCallback(
        (name, value) => {
          console.log(name, value);
    
          value !== null && onItemChange({ ...item, [name]: value }, index);
        },
        [item, index, onItemChange]
      );

    return (
        <FormControl fullWidth>
        <FormLabel>Units</FormLabel>
        <TextField
      onChange={({ target: { value } }) => setFieldValue("number", value)}
    
      variant="outlined"
      value={item.number}
    />
    </FormControl>
    );
}



export function FormSite({ siteId, unitId, onClose }) {
//   const site = useRecoilValue(getApplicantsWithNameMap).get(applicantId);
const isNew = !siteId;
const navigate = useNavigate();
  const [siteInfo, setSiteInfo] = useRecoilState(
    // getTenantFormData
    ({ siteId, unitId })
  );

  const [item, setItem] = useState(siteInfo);

//   console.log({ applicantId }, tenantInfo);

  const canSumbit = true; // add validation
//   const sitesMap = useRecoilValue(getSitesWithTenantMap);

//   const allUnits = sitesMap
//     .get(item.siteId)
//     .units.filter((item) => !item.tenant);

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




const handleAddUnit = useCallback(() => {
    setItem((item) => ({
      ...item,
      units: [
        ...item.units,
        {
        //   ...EMPTY_APPLICANT,
        },
      ],
    }));
  }, [setItem]);

  const handleUpdateSite = useCallback(
    (site, index) => {
      setItem((item) => ({
        ...item,
        sites: replaceItemAtIndex(item.sites || [], index, site),
      }));
    },
    [setItem]
  );

  const handleRemoveSite = useCallback(
    (index) => {
      setItem((item) => ({
        ...item,
        sites: removeItemAtIndex(item.sites || [], index),
      }));
    },
    [setItem]
  );




 

  const handleSubmit = useCallback(() => {
    setSiteInfo(item);

    onClose();
  }, [item, onClose, setSiteInfo]);


  navigate(-1);
}, [item, navigate, setSiteInfo]);

  return (
    <>
      <DialogTitle>Add Site</DialogTitle>

      <DialogContent>
        <Stack direction="column" gap={4}>
          <Stack>
       

            <FormControl fullWidth>
              <FormLabel>Site Name</FormLabel>
              <TextField
            onChange={({ target: { value } }) => setFieldValue("sites", value)}
          
            variant="outlined"
            value={item.siteName}
          />



            </FormControl> 

            <FormControl>
          <FormLabel>County</FormLabel>

          <TextField {...addProps({ name: "siteCounty" })} />
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>

          <TextField {...addProps({ name: "siteAddress" })} />
        </FormControl>

        <FormControl fullWidth>
              <FormLabel>City</FormLabel>
              <TextField {...addProps({ name: "siteCity" })} />

              </FormControl>

              <FormControl fullWidth>
              <FormLabel>Zip Code</FormLabel>
              <TextField {...addProps({ name: "siteZip" })} />

              </FormControl>


        <FormControl>
          <FormLabel>Phone Number</FormLabel>

          <TextField {...addProps({ name: "sitePhone" })} />
        </FormControl>
           


            <FormControl fullWidth>
              <FormLabel>Units</FormLabel>
              <TextField
            onChange={({ target: { value } }) => setFieldValue("number", value)}
          
            variant="outlined"
            value={item.number}
          />

  


            </FormControl> 
            
             <FormUnit />
          </Stack>

         
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!canSumbit}
        >
          Add Site
        </Button>

        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </>
  );
}




export const getSiteFormData = selectorFamily({
    key: "getSiteFormData",
    get:
      ({ siteId, unitId, siteAddress, siteCity, siteCounty, siteZip, sitePhone  }) =>
      ({ get }) =>
        get(getSitesMap).get(getSiteId({ siteId, unitId, siteAddress, siteCity, siteCounty, siteZip,  sitePhone  })) || {
          siteId,
          unitId,
          siteAddress,
          siteCity,
          siteCounty,
          siteZip,
          sitePhone
  
        },
    set:
      () =>
      ({ get, set }, newItem) => {
        console.log("newItem", newItem);
  
        const siteId = getSiteId(newItem);
  
        const newSiteState = updateState(
          get(sites),
          (item) => getSiteId(item) === siteId,
          newItem,
          false
        );
  
        // const currentApplicant = get(getSitesMap).get(newItem.siteId);
  
        // if (!currentApplicant) {
        //   console.error("Applicant not found", newItem);
        // }
  
        // const applicant = { ...currentApplicant };
  
        // if (
        //   !!newItem.dateMoveIn &&
        //   applicant.applicantStatus !== APPLICANT_STATUS_MAP.Placed
        // ) {
        //   applicant.applicantStatus = APPLICANT_STATUS_MAP.Placed;
        //   applicant.notes = `${applicant.notes || ""} PLACED ${newItem.siteId}-${
        //     newItem.unitId
        //   } on ${new Date(newItem.dateMoveIn).toLocaleDateString()}`;
        // } else if (
        //   !newItem.dateMoveIn &&
        //   applicant.applicantStatus === APPLICANT_STATUS_MAP.Placed
        // ) {
        //   applicant.applicantStatus = APPLICANT_STATUS_MAP.Applied;
        // }
  
        const newSitesState = updateState(
          get(sites),
          (item) => item.siteId === newItem.siteId,
          site,
          false
        );
  
        set(sites, newSitesState);
        set(units, newUnitState);
  
        // console.log(newTenantState, newApplicantsState);
      },
  });