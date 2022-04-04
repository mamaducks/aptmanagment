import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getSiteInfo } from "../state/sites";

export function SiteHeader() {
  const { siteId } = useParams();

  const { siteName } = useRecoilValue(getSiteInfo(siteId));

  return <Typography variant="h4">{siteName}</Typography>;
}
