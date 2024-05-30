import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const ConfirmLogoutDialog = () => {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-medium">
            Confirmação
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center">
            Deseja deslogar do site?
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmLogoutDialog;
