import styled from "styled-components";

export const Container = styled.div`
  .indicators {
  }
  .calls-of-the-day {
    > h2 {
      color: #545454;
      margin: 20px 0;
      background-color: #d5e5ee52;
      padding: 20px;
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
