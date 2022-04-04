import { Dialog } from "@mui/material";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { employeeDialogInfo } from "../state/dialogs";
import { FormEmployee } from "../forms/FormEmployee";
import { FormRent } from "../forms/FormRent";

export function DialogRent() {
  const [dialogInfo, setDialogInfo] = useRecoilState(employeeDialogInfo);

  const onClose = useCallback(() => setDialogInfo(undefined), [setDialogInfo]);

  if (!dialogInfo) {
    return null;
  }

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="md">
      <FormRent {...dialogInfo} onClose={onClose} />
    </Dialog>
  );
}