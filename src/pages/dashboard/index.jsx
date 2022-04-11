import { Container, PatientList } from "./styles";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers";
import { useNavigate } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi";

export const Dashboard = () => {
  const { auth, users } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(id);
    navigate(`/chart/patient/${id}`);
  };

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth]);

  return (
    <Container>
      <div className="indicators">
        <div className="calls"></div>
        <div className="returns"></div>
        <div className="attended"></div>
      </div>
      <div className="calls-of-the-day">
        <h2>Atendimentos</h2>
        <PatientList>
          {users.map((patient) => (
            <li key={patient.index} onClick={() => handleClick(patient.index)}>
              {patient.name} <BiRightArrow />
            </li>
          ))}
        </PatientList>
      </div>
    </Container>
  );
};
