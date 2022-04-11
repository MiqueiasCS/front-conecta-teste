import styled from "styled-components";
import image from "../../assets/backHome.jpg";

export const Container = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;

  .bg-color {
    background-color: #0000007a;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: 30px;
        color: #ffffff;
      }
      p {
        font-size: 18px;
        color: #ffffff;
        margin-top: 20px;
        text-align: center;
      }
    }
  }

  @media (min-width: 768px) {
    .bg-color {
      > div {
        width: 500px;

        h3 {
          font-size: 32px;
        }
        p {
          font-size: 20px;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .bg-color {
      align-items: flex-end;
      > div {
        width: 500px;
        margin-right: 5%;
        h3 {
          font-size: 36px;
        }
        p {
          font-size: 24px;
        }
      }
    }
  }
`;
