import { useEffect, useContext } from "react";
import { Container } from "./styles";
import { AuthContext } from "../../providers";
import { useNavigate, useParams } from "react-router-dom";

export const Chart = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth]);

  return <Container>Prontuário do client {params.id}</Container>;
};
