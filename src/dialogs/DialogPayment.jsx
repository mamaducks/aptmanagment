import { Dialog } from "@mui/material";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { paymentDialogInfo } from "../state/dialogs";
import { FormPayment } from "../forms/FormPayment";

export function DialogPayment() {
  const [dialogInfo, setDialogInfo] = useRecoilState(paymentDialogInfo);

  const onClose = useCallback(() => setDialogInfo(undefined), [setDialogInfo]);

  if (!dialogInfo) {
    return null;
  }

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="md">
      <FormPayment {...dialogInfo} onClose={onClose} />
    </Dialog>
  );
}