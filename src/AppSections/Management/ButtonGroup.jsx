import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import {
  Route,
  Switch,
  // Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import {managementLinks} from "../../routes"
import { Tab, Tabs } from '@mui/material';

export default function VariantButtonGroup() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // let match = useRouteMatch();

    return (
      // <Box
      //   sx={{
      //     display: 'flex',
      //     flexDirection: 'column',
      //     alignItems: 'center',
      //     '& > *': {
      //       m: 1,
      //     },
      //   }}
      // >
      //   <ButtonGroup variant="outlined" aria-label="outlined button group">
      //     {/* <Link to={`${match.url}/Bills`}> */}
      //      <Button >bills overview</Button>

      //     {/* </Link> */}
         
      //     <Button>RentRollSummary</Button>
      //     <Button>tenants</Button>
      //   </ButtonGroup>
      //   <ButtonGroup variant="text" aria-label="text button group">
      //   <Button>bills overview</Button>
      //     <Button>RentRollSummary</Button>
      //     <Button>tenants </Button>
      //   </ButtonGroup>

      //   {/* <Switch>
      //   <Route exact path={path}>
      //     <h3>the bills</h3>
      //   </Route>
      //   {/* <Route path={`${path}/:topicId`}>
      //     <Topic />
      //   </Route> 
      // </Switch> */}
      // </Box>

<Box   sx={{
         display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
         '& > *': {
            m: 1,
          },
        }}>
<Tabs
  value={window.location.pathname}
  onChange={handleChange}
  aria-label="nav tabs example"
>
  {/* {siteSections.map((item, index) => ( */}
  {Object.values(managementLinks).map(({ link, label, index }) => (
    <Tab
      label={label}
      href={link}
      key={link}
      component="a"
      value={link}
    />
  ))}
</Tabs>
</Box>
    );
  }