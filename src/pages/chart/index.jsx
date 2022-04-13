import { useEffect, useContext, useState } from "react";
import { Container } from "./styles";
import { AuthContext } from "../../providers";
import { useNavigate, useParams } from "react-router-dom";
import { EmptyField } from "../../components/emptyField";
import { FilledField } from "../../components/filledField";
import { Modal } from "../../components/modal";

export const Chart = () => {
  const { auth, users, setUsers, findPatient } = useContext(AuthContext);
  const [patient, setPatient] = useState({});
  const [field, setField] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [empty, setEmpty] = useState({
    subjective: false,
    objective: false,
    assessment: false,
    plan: false,
  });

  const navigate = useNavigate();
  const params = useParams();

  const handleModal = (subject) => {
    setField(subject);
    setOpenModal(true);
  };

  const handleSaveUserData = () => {
    let newUsersList = users.map((user) => {
      if (user.index === parseInt(params.id)) {
        return { ...patient, attended: true };
      }
      return user;
    });

    setUsers(newUsersList);
    navigate("/dashboard");
  };

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
  }, [auth, params.id]);

  return (
    <Container>
      <h2>Prontuário</h2>
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

      <div className="sections">
        <div className="subjectiv">
          <h2>Subjetiva</h2>
          {empty.subjective ? (
            <FilledField fieldData={patient.subjective} />
          ) : (
            <EmptyField />
          )}

          <button onClick={() => handleModal("subjective")}>+</button>
        </div>

        <div className="objectiv">
          <h2>Objetiva</h2>
          {empty.objective ? (
            <FilledField fieldData={patient.objective} />
          ) : (
            <EmptyField />
          )}

          <button onClick={() => handleModal("objective")}>+</button>
        </div>

        <div className="assessment">
          <h2>Avaliação</h2>
          {empty.assessment ? (
            <FilledField fieldData={patient.assessment} />
          ) : (
            <EmptyField />
          )}
          <button onClick={() => handleModal("assessment")}>+</button>
        </div>

        <div className="plan">
          <h2>Plano</h2>
          {empty.plan ? (
            <FilledField fieldData={patient.plan} />
          ) : (
            <EmptyField />
          )}
          <button onClick={() => handleModal("plan")}>+</button>
        </div>
      </div>

      <button className="save-user" onClick={handleSaveUserData}>
        Salvar
      </button>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          patient={patient}
          setPatient={setPatient}
          field={field}
          empty={empty}
          setEmpty={setEmpty}
        />
      )}
    </Container>
  );
};
