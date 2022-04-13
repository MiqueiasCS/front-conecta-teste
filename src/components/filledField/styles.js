import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f3f3;
  width: 300px;
  padding: 20px;

  p {
    width: 100%;
    margin: 5px 0;

    .title {
      color: #545454;
      font-weight: bold;
      font-size: 18px;
    }
  }

  > ul {
    margin: 8px 0;

    > li {
      display: flex;
      align-items: center;
      padding: 5px;
    }
  }

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 1200px;
  }
`;
