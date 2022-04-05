import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { dateFormatter } from "../formatters/cellFormatters";
import { getSiteWithTenantsSummaryInfo } from "../state/sites";
import { Button } from '@mui/material';

export function RecertListScroll() {
    const { siteId } = useParams();

    const siteInfo = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 240,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {[30, 60, 90, ].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader>{`${sectionId} Days`}</ListSubheader>
            {siteInfo?.siteRenewals?.map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Unit ${item?.unitId}`} />
                <ListItemText primary={dateFormatter({ value: item?.dateRenewal })} />
                <ListItemText primary="Recert Button" />

              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}


export function VacantListScroll() {
    const { siteId } = useParams();

    const siteInfo = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

    const vacantUnits = siteInfo.units.filter((unit) => !unit.tenant);

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 400,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 280,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >

      {/* {(30).map((sectionId) => (
        <li key={`section-${sectionId}`}>*/}
          <ul> 
            <ListSubheader>Vacant Units</ListSubheader>
            <ListItem sx={{justifyContent: "flex-end"}}><Button variant="contained" sx={{textDecoration: "none"}}>View Waiting List</Button></ListItem>
            {vacantUnits?.map((vacantUnit) => (
              <ListItem key={`item-${vacantUnit}-${vacantUnit}`}>
                <ListItemText primary={`Unit ${vacantUnit?.unitId}`} />
                <ListItemText primary={`Vacant since ${dateFormatter({ value: vacantUnit.lastMoveOut })}`} />

              </ListItem>
            ))}
          </ul>
    {/* //     </li>
    //    ))}  */}
    </List>
  );
}