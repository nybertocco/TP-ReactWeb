import Button from "@mui/material/Button";

export default function ButtonCustom({ label, onClick }) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
}
