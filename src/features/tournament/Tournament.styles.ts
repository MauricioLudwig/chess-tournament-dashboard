import styled from "@emotion/styled";
import backgroundImg from "../../assets/background-page.jpg";

export const Container = styled.div`
  background: url(${backgroundImg});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

export const StickyFooter = styled.div`
  background: #fff;
  position: fixed;
  z-index: 100;
  width: 100vw;
  left: 0;
  bottom: 0;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
