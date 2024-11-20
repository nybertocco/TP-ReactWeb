import { Snackbar, Button } from "@mui/material";
import { useState } from "react";

export default function SnackbarComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Snackbar aberto</Button>
      <Snackbar
        open={open}
        message="Esse é o SnackBar"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
