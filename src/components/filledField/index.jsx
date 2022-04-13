import { Container } from "./styles";
import { IoMdArrowDropright } from "react-icons/io";

export const FilledField = ({ fieldData }) => {
  return (
    <Container>
      <p>
        <span className="title">Situação: </span>
        {fieldData[0].situation ? "Ativa" : "Inativa"}
      </p>

      <p>
        <span className="title">Problemas:</span>
      </p>
      <ul>
        {fieldData[0].problems.map((prob, index) => (
          <li key={index}>
            <IoMdArrowDropright /> {prob}
          </li>
        ))}
      </ul>

      <p>
        <span className="title">Observações: </span>
      </p>
      <p className="obs">{fieldData[0].observations}</p>
    </Container>
  );
};
