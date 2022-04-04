import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, Stack } from "@mui/material";
import { SiteHeader } from "../../headers/SiteHeader";
import { TenantInfoCard } from "./TenantInfoCard";
import { TenantLedger } from "./TenantLedger";
import { TenantCurrentPayment } from "./TenantPaymentCard";


export function TenantInfo() {
  return (
    <>
      <Stack>
        <SiteHeader />
        <Button href="/" startIcon={<ArrowBackIosIcon />}>
          Back to Dashboard
        </Button>
      </Stack>

      <Stack>
        <TenantInfoCard />
        <TenantCurrentPayment />
      </Stack>
      <TenantLedger />
    </>
  );
}
