import { Grid, Paper } from "@mui/material";

export default function GridComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper>Lado esquerdo</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Lado direito</Paper>
      </Grid>
    </Grid>
  );
}
