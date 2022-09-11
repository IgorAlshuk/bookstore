import {
  FooterContainer,
  FooterDate,
  FooterRights,
  FooterWrapper,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterDate>©2022 Bookstore igordilar@mail.ru</FooterDate>
        <FooterRights>All rights reserved</FooterRights>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;