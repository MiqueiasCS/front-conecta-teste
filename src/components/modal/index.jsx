import { Container, ContainerChild } from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Modal = ({
  patient,
  setPatient,
  field,
  setOpenModal,
  empty,
  setEmpty,
}) => {
  const [problemList, setProblemList] = useState([]);
  const [problemInputValue, setProblemInputValue] = useState("");

  const schema = yup.object().shape({
    situation: yup.boolean().default(false),
    observations: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleProblemInput = () => {
    setProblemList([...problemList, problemInputValue]);
    setProblemInputValue("");
  };

  const handleForm = (data) => {
    data["problems"] = problemList;

    let updatedPatient = { ...patient };
    updatedPatient[field] = [data];
    setPatient(updatedPatient);

    let updatedEmptyFields = { ...empty };
    updatedEmptyFields[field] = true;

    setEmpty(updatedEmptyFields);
    setOpenModal(false);
  };

  return (
    <Container>
      <div className="close">
        <AiFillCloseCircle onClick={() => setOpenModal(false)} />:
      </div>

      <ContainerChild>
        <div className="problems">
          <input
            type="text"
            placeholder="descreva seu problema"
            value={problemInputValue}
            onChange={(e) => setProblemInputValue(e.target.value)}
          />
          <MdSend onClick={handleProblemInput} />
        </div>

        <div className="problems-list">
          <ul>
            {problemList.map((problem, index) => (
              <li key={index}>
                <IoMdArrowDropright /> {problem}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit(handleForm)}>
          <div className="input-checkbox">
            <input id="active" type="checkbox" {...register("situation")} />
            <label htmlFor="active">Situação Ativa</label>
          </div>

          <textarea placeholder="observações" {...register("observations")} />
          <button type="submit">enviar</button>
        </form>
      </ContainerChild>
    </Container>
  );
};
