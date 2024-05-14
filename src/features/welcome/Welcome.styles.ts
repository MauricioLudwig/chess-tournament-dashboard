import styled from "@emotion/styled";
import backgroundImg from "../../assets/background-page.jpg";

export const Container = styled.div`
  background: url(${backgroundImg});
  background-size: cover;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background: #f8f8f8;
  opacity: 0.85;
  text-align: center;
  padding: 2rem;
  border-radius: 15px;
`;
