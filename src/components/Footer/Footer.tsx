import { StyledFooter, Copyright, Container } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Copyright>©2022 Bookstore igordilar@mail.ru</Copyright>
        <Copyright>All rights reserved</Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;