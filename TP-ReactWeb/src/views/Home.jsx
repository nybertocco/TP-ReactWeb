import CustomButton from "../components/CustomButton";
import Button from "@mui/material/Button";

export default function Home() {
  const handleClick = () => {
    alert("Botão clicado!");
  };

  return (
    <div>
      <h1>Home</h1>
      <CustomButton label="Clique Aqui" onClick={handleClick} />
    </div>
  );
}
