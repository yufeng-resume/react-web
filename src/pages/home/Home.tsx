import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { Image } from 'src/components/ui/Image';
import yufengImage from 'src/assets/images/yufeng.jpeg';
import { Title, Paragraph } from 'src/elements/Text';
import { sessionAtom } from 'src/utils/atoms/sessionAtom';
import { useAtom } from 'jotai';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  padding-left: 0px;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  font-size: 20px;
  padding: 0 20px;
`;

export const Home = () => {
  const [{ isLoggedIn }] = useAtom(sessionAtom);
  const loggedOutMessage =
    'Hello! This website serves as an easy way for recruiters to find the information they need from me quickly. To begin, please login on the top right corner!';
  const loggedInMessage =
    'I aspire to learn more about the principles of software development to one day design a huge yet scalable and maintainable system that spans across countries.';
  return (
    <Container>
      <Helmet>
        <title> Yufeng Resume </title>
      </Helmet>
      <Title $centered> About me </Title>
      <Image $width="300px" ratio={1} src={yufengImage} alt="#" />
      <StyledParagraph>{isLoggedIn ? loggedInMessage : loggedOutMessage}</StyledParagraph>
    </Container>
  );
};
