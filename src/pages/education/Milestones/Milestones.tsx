import styled from 'styled-components';

import { boxShadow } from 'src/assets/mixins';
import { Caption } from 'src/elements/Text';
import { ExpendablePanel } from '../../../components/ui/ExpendablePanel';
import { Results } from './Results';
import { Opencerts } from './Opencerts';
import { Misc } from './Misc';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.accent};
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  ${boxShadow};
`;

const Milestones = () => {
  const milestoneHeaders = ['SUTD', 'A level', 'O level', 'PSLE'];

  // Sets queryPaths to get data for each milestone from DB
  const queryPaths: string[] = []; // ['education/milestones/alevel', 'education/milestones/olevel', 'education/milestones/psle'
  milestoneHeaders.forEach((header) => {
    const queryHeader = header.replace(/\s/g, '').toLowerCase(); // Removes spaces and converts to lowercase
    const queryPath = 'education/milestones/' + queryHeader;
    queryPaths.push(queryPath);
  });

  return (
    <Container>
      {milestoneHeaders.map((header, index) => (
        <ExpendablePanel key={index} header={<Caption>{header}</Caption>}>
          <Results queryPath={queryPaths[index]} />
          <Opencerts queryPath={queryPaths[index].replace(/milestones/g, 'opencerts')} />
          <Misc queryPath={queryPaths[index].replace(/milestones/g, 'misc')} />
        </ExpendablePanel>
      ))}
    </Container>
  );
};

export default Milestones;
