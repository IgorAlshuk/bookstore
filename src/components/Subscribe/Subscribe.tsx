import {
  StyledSubscribe,
  SubscribeTitle,
  SubscribeSubtitle,
  SubscribeInput,
  SubscribeButton,
  SubscribeForm,
  Container,
  SubscribeBlock,
} from "./styles";

const Subscribe = () => {
  return (
    <StyledSubscribe>
      <Container>
        <SubscribeBlock>
          <SubscribeTitle>Subscribe to Newsletter</SubscribeTitle>
          <SubscribeSubtitle>
			 You will be the first to know 📚
          </SubscribeSubtitle>
          <SubscribeForm>
            <SubscribeInput placeholder="Your email" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </SubscribeForm>
        </SubscribeBlock>
      </Container>
    </StyledSubscribe>
  );
};

export default Subscribe;