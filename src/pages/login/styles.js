import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f9fc8a;

  .header {
    > p {
      font-size: 24px;
    }
  }

  > form {
    background-color: #d5e5ee;
    width: 300px;
    height: 290px;
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;

    > button {
      background-color: #a6c3d3;
      font-size: 16px;
      color: #ffffff;
      width: 150px;
      height: 30px;
      border-radius: 5px;
      margin: 10px 0;
    }
  }

  .input {
    background-color: #ffffff;
    height: 60px;
    margin: 5px 0;
    border-radius: 10px;
  }

  .input-field {
    display: flex;
    flex-direction: column;

    > label {
      padding-left: 13px;
      color: #7f8589;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }

    > div {
      display: flex;
      align-items: center;
      padding-left: 10px;

      input {
        height: 25px;
        width: 200px;
        border: none;
        padding-left: 5px;
      }
    }
  }

  .text-error {
    font-size: 10px;
    color: red;
    padding-right: 8px;
  }

  @media (min-width: 768px) {
    > form {
      width: 500px;
      height: 290px;
    }

    .input-field {
      > div {
        input {
          width: 300px;
        }
      }
    }
  }
`;
