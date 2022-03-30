import { Dialog } from "@mui/material";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { employeeDialogInfo } from "../state/dialogs";
import { FormEmployee } from "../forms/FormEmployee";

export function DialogEmployee() {
  const [dialogInfo, setDialogInfo] = useRecoilState(employeeDialogInfo);

  const onClose = useCallback(() => setDialogInfo(undefined), [setDialogInfo]);

  if (!dialogInfo) {
    return null;
  }

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="md">
      <FormEmployee {...dialogInfo} onClose={onClose} />
    </Dialog>
  );
}
