import { Dialog } from "@mui/material";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { moveOutDialogInfo } from "../state/dialogs";
import { FormMoveOut } from "../forms/FormMoveOut";

export function DialogMoveOut() {
  const [dialogInfo, setDialogInfo] = useRecoilState(moveOutDialogInfo);

  const onClose = useCallback(() => setDialogInfo(undefined), [setDialogInfo]);

  if (!dialogInfo) {
    return null;
  }

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="md">
      <FormMoveOut {...dialogInfo} onClose={onClose} />
    </Dialog>
  );
}
