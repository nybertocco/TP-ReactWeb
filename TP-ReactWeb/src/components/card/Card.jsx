import { Card, CardContent, Typography } from "@mui/material";

export default function Card() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Card Titulo</Typography>
        <Typography variant="body2">Conteúdo do card</Typography>
      </CardContent>
    </Card>
  );
}
