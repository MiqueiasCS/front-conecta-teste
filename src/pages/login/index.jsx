import { Container } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../providers";

export const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido!").required("Campo Obrigatório!"),
    password: yup.string().min(4, "Mínimo de 4 caracteres!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    console.log(data);
    localStorage.setItem("@user", JSON.stringify(data));
    setAuth(true);
    navigate("/dashboard");
  };

  return (
    <Container>
      {/* <Navheader /> */}
      <div className="header">
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <p>Faça seu Login aqui!!</p>
      </div>

      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="input">
          <div className="input-field">
            <label>
              Email
              {errors.email && (
                <span className="text-error"> -- {errors.email.message}</span>
              )}
            </label>

            <div>
              <HiOutlineMail />
              <input
                type="text"
                placeholder="Digite seu Email..."
                {...register("email")}
              />
            </div>
          </div>
          {/* <p className="text-error">{errors.email?.message}</p> */}
        </div>

        <div className="input">
          <div className="input-field">
            <label>
              Senha
              {errors.password && (
                <span className="text-error">
                  {" "}
                  -- {errors.password.message}
                </span>
              )}
            </label>

            <div>
              <RiLockPasswordLine />
              <input
                type="password"
                placeholder="Digite sua Senha..."
                {...register("password")}
              />
            </div>
          </div>
          {/* <p className="text-error">{errors.password?.message}</p> */}
        </div>
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
};
