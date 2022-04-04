import { Button, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { SiteHeader } from "../../headers/SiteHeader";
import { getCurrentMonthYearLabel } from "../../state/helpers/dataHelpers";
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
