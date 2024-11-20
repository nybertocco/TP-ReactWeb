import ButtonCustom from "../../components/button/ButtonCustom.jsx";
import Button from "@mui/material/Button";

export default function Home() {
  const handleClick = () => {
    alert("Botão clicado!");
  };

  return (
    <div>
      <h1>Home</h1>
      <ButtonCustom label="Clique Aqui" onClick={handleClick} />
    </div>
  );
}
