import styled from "styled-components";

export const Container = styled.div`
  .indicators {
    display: flex;
    justify-content: center;
    margin: 24px 0;

    > div {
      height: 90px;
      width: 140px;
      box-shadow: 5px 10px 8px #d5e5ee;
      border-radius: 5px;

      > p {
        color: #9b6e38;
        font-size: 20px;
        font-weight: bold;
      }
    }

    div + div {
      margin-left: 24px;
    }
  }

  .calls {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      font-weight: bold;
      font-size: 18px;
      color: #5f727c;
    }
  }
  .returns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      font-weight: bold;
      font-size: 18px;
      color: #5f727c;
    }
  }

  .calls-of-the-day {
    > h2 {
      color: #545454;
      margin: 20px 0;
      background-color: #d5e5ee52;
      padding: 20px;
    }
  }

  @media (min-width: 1024px) {
    .indicators {
      div {
        height: 160px;
        width: 300px;
      }
    }
  }
`;

export const PatientList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > li {
    height: 40px;
    width: 80%;
    border-radius: 8px;
    border-bottom: 1px solid #54545426;
    font-size: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      color: #545454;
      font-size: 24px;
    }
    :hover {
      cursor: pointer;
      background-color: #d5e5ee;
      transition: 0.5s;
    }
  }

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;
