import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .info {
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: #d5e5ee66;
    border-radius: 5px;
    margin: 25px 0;

    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      border-bottom: 1px solid lightgray;
    }
  }

  .sections {
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        color: #9b6e38;
        margin: 20px 0;
      }

      > button {
        margin: 20px 0;
        width: 30px;
        height: 30px;
        font-size: 24px;
        border-radius: 5px;

        color: #9b6e38;
        background-color: #ffffff;
        box-shadow: 1px 1px 4px 4px #d5e5ee;
      }
    }
  }

  .save-user {
    background-color: #a6c3d3;
    margin: 23px 0;
    padding: 15px;
    border-radius: 10px;
    width: 150px;
    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    .info {
      width: 500px;
    }
  }

  @media (min-width: 1024px) {
    .sections {
      width: 90%;
      max-width: 1200px;
    }
  }
`;
