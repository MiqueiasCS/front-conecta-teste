import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000087;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  .close {
    margin-right: 5%;
    align-self: flex-end;

    svg {
      color: #ffffff;
      font-size: 24px;
      font-size: 32px;
    }
  }

  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
`;

export const ContainerChild = styled.div`
  width: 288px;
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  height: 90vh;
  overflow-y: scroll;

  .problems {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > input {
      width: 210px;
      padding-left: 5px;
    }
  }

  .problems-list {
    width: 240px;
    margin: 15px 0;

    > ul {
      background-color: #a6c3d326;

      > li {
        display: flex;
        align-items: center;
        padding: 5px;
      }
    }
  }

  > form {
    display: flex;
    flex-direction: column;

    .input-checkbox {
      label {
        margin-left: 5px;
      }
    }
    textarea {
      width: 240px;
      height: 200px;
      resize: none;
      padding: 8px;
    }

    > button {
      background-color: #a6c3d3;
      margin: 16px 0;
      padding: 10px;
      border-radius: 3px;

      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
    }
  }

  @media (min-width: 768px) {
    width: 500px;

    .problems {
      width: 340px;

      > input {
        width: 310px;
        font-size: 16px;
        height: 30px;
      }
      > svg {
        font-size: 22px;
      }
    }

    .problems-list {
      width: 340px;
    }

    > form {
      textarea {
        width: 340px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 769px;

    .problems {
      width: 540px;

      > input {
        width: 500px;
      }
    }

    .problems-list {
      width: 540px;
    }

    > form {
      textarea {
        width: 540px;
      }
    }
  }
`;
