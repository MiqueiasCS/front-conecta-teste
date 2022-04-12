import { Container, PatientList } from "./styles";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers";
import { useNavigate } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi";

export const Dashboard = () => {
  const { auth, users, unattendedUsers, returndUsers } =
    useContext(AuthContext);

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
        <div className="calls">
          <p>Atendimentos</p>
          <div>
            {users.length - unattendedUsers.length}/{users.length}
          </div>
        </div>
        <div className="returns">
          <p>Retornos</p>
          <div>{returndUsers.length}</div>
        </div>
        {/* <div className="attended"></div> */}
      </div>
      <div className="calls-of-the-day">
        <h2>Lista de Pacientes</h2>
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
