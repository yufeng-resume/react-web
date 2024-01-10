import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { Title } from 'src/elements/Text';
import Milestones from 'src/pages/education/Milestones/Milestones';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  padding-left: 0px;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

export const Education = () => {
  return (
    <Container>
      <Helmet>
        <title> Yufeng Resume </title>
      </Helmet>
      <Title $centered>Education</Title>
      <Milestones />
    </Container>
  );
};
