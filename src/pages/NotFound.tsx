import styled from "styled-components";
import { Title } from "../components/Title/Title";

export const NotFound = () => {
  return (
    <Container>
      <Title>🙈</Title>
      <Title>Not Found</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;