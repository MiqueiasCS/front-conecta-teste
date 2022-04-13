import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f3f3;
  width: 300px;
  padding: 20px;

  > p {
    color: gray;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 1200px;
  }
`;
