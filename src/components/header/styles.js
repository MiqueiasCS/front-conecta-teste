import styled from "styled-components";

export const Container = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-bottom: solid 1px #f1e8e8eb;

  > ul {
    display: flex;
    width: 350px;
    justify-content: space-evenly;
    align-items: center;
    font-size: 22px;
    font-weight: bolder;

    li {
      cursor: pointer;
      padding: 5px;
      color: #545454;

      :hover {
        color: black;
        background-color: #ffe5c66b;
        transition: 0.5s;
        border-radius: 5px;
      }
    }

    .login-out {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > svg {
        font-size: 24px;
        margin-left: 8px;
      }
    }
  }
`;
