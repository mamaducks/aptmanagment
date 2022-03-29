import { Dialog } from "@mui/material";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { moveInDialogInfo } from "../state/dialogs";
import { FormTenant } from "../forms/FormTenant";

export function DialogTenant() {
  const [dialogInfo, setDialogInfo] = useRecoilState(moveInDialogInfo);

  const onClose = useCallback(() => setDialogInfo(undefined), [setDialogInfo]);

  if (!dialogInfo) {
    return null;
  }

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="md">
      <FormTenant {...dialogInfo} onClose={onClose} />
    </Dialog>
  );
}
