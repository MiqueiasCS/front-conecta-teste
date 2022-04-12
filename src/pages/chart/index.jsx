import { useEffect, useContext, useState } from "react";
import { Container } from "./styles";
import { AuthContext } from "../../providers";
import { useNavigate, useParams } from "react-router-dom";

export const Chart = () => {
  const { auth, users, setUsers, findPatient } = useContext(AuthContext);
  const [patient, setPatient] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
    let id = parseInt(params.id);
    let user = findPatient(id);

    if (!user) {
      navigate("/dashboard");
    }
    setPatient(user);
  }, [auth, users]);

  return (
    <Container>
      Prontuário do client
      <div className="info">
        <p>
          <span className="info-field">Paciente: </span>
          <span className="info-attribute">{patient.name}</span>
        </p>
        <p>
          <span className="info-field">Idade: </span>
          <span className="info-attribute">{patient.age}</span>
        </p>
        <p>
          <span className="info-field">Sexo: </span>
          <span className="info-attribute">{patient.gender}</span>
        </p>
      </div>
    </Container>
  );
};
