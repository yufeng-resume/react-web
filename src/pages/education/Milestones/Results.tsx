import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useFirestore } from 'reactfire';
import { DocumentData } from 'firebase/firestore';

import { getAllDocs } from 'src/utils/helpers/query/getAllDocs';
import { Text } from 'src/elements/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: background 0.2s;
  padding: 16px 16px 16px 16px;
  border-top: 2px solid ${({ theme }) => theme.colors.light};
`;

interface StyledTextProps {
  $underline?: boolean;
  $padding?: string;
}

const StyledText = styled(Text)<StyledTextProps>`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  text-decoration: ${({ $underline }) => ($underline ? 'underline' : 'none')};
  padding: ${({ $padding }) => ($padding ? $padding : '0px')};
`;

interface Props {
  queryPath: string;
}

export const Results = ({ queryPath }: Props) => {
  const firestore = useFirestore();
  const [results, setResults] = useState<DocumentData | null>(null);

  useEffect(() => {
    // Fetch results for each milestone from DB
    getAllDocs(firestore, queryPath).then((docs) => {
      docs.forEach((doc) => {
        switch (doc.id) {
          case 'results':
            const { id, ...docWithoutId } = doc;
            setResults(docWithoutId);
            break;
        }
      });
    });
  }, [queryPath]);

  return (
    <Container>
      <StyledText $underline $padding="0 0 6px 0">
        Results
      </StyledText>
      {results &&
        Object.entries(results)
          .sort(([, keyA], [, keyB]) => (keyA as string).localeCompare(keyB as string))
          .map(([key, value], index) => (
            <StyledText key={index} $padding="0 0 4px 0">
              {key}: {JSON.stringify(value).replace(/^"|"$/g, '')}
            </StyledText>
          ))}
    </Container>
  );
};
