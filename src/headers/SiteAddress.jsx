import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getSiteInfo } from "../state/sites";
import { phoneFormatter } from "../formatters/cellFormatters";
import { Typography } from "@mui/material";
import { SiteHeader } from "./SiteHeader";
import { Box } from "@mui/system";

export function SiteAddress() {
  const { siteId } = useParams();

  const { siteAddress, siteCity, siteZip, sitePhone, siteCounty } =
    useRecoilValue(getSiteInfo(siteId));

  const phone = phoneFormatter({ value: sitePhone });

  return (
    <Box sx={{ width: 500 }}>
      <SiteHeader />

      <Typography variant="h6">
        {siteAddress} {siteCity}, NJ {siteZip}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {phone}
      </Typography>

      <Typography variant="subtitle1">{siteCounty} County</Typography>
    </Box>
  );
}
