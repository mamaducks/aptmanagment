import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getSiteInfo } from "../state/sites";
import { phoneFormatter } from "../formatters/cellFormatters";

export function SiteAddress() {
  const { siteId } = useParams();

  const { siteAddress, siteCity, siteZip, sitePhone, siteCounty } =
    useRecoilValue(getSiteInfo(siteId));

  const phone = phoneFormatter({ value: sitePhone });

  return (
    <div>
      <div>{siteAddress}</div>
      <div>{siteCity}</div>
      <div>{siteZip}</div>
      <div>{phone}</div>

      <div>{siteCounty} County</div>
    </div>
  );
}
