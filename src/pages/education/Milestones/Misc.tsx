import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from 'src/firebase';

import { Text } from 'src/elements/Text';
import { DownloadLink } from 'src/elements/Link';
import { ImagePreview } from 'src/components/ui/ImagePreview';

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

const DownloadLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 10px 0;
  align-items: center;
  gap: 10px;
`;

const StyledDownloadLink = styled(DownloadLink)`
  padding: 10px;
`;

const StyledImagePreview = styled(ImagePreview)`
  display: block;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    cursor: pointer;
  }
  padding: 10px;
`;

interface Props {
  queryPath: string;
}

export const Misc = ({ queryPath }: Props) => {
  const [downloadURLs, setDownloadURLs] = useState<string[]>([]);
  const [filenames, setFilenames] = useState<string[]>([]);

  useEffect(() => {
    // Fetches all download URLs for files in folder and their filenames using queryPath
    // Saves to filenames and downloadURLs
    const listRef = ref(storage, queryPath);
    const downloadURLsTemp: string[] = [];
    const filenamesTemp: string[] = [];
    listAll(listRef)
      .then((res) => {
        const downloadURLsPromises: Promise<string | void>[] = [];
        res.items.forEach((itemRef) => {
          const promise = getDownloadURL(itemRef)
            .then((url) => {
              downloadURLsTemp.push(url);
              filenamesTemp.push(itemRef.name);
              return url;
            })
            .catch((error) => {
              console.error('Error getting download URL:', error);
            });
          downloadURLsPromises.push(promise);
        });
        Promise.all(downloadURLsPromises).then(() => {
          setDownloadURLs(downloadURLsTemp);
          setFilenames(filenamesTemp);
        });
      })
      .catch((error) => {
        console.error('Error listing files:', error);
      });
  }, [queryPath]);

  return (
    <Container>
      <StyledText $underline $padding="0 0 6px 0">
        Miscellenous
      </StyledText>
      {downloadURLs.map((url, index) => (
        <DownloadLinkContainer key={index}>
          <StyledText $padding="0 0 0 0">{`${filenames[index]}:`}</StyledText>
          <StyledDownloadLink href={url}>Download</StyledDownloadLink>
          <StyledImagePreview imagePath={`misc/${filenames[index]}.jpg`}>Hover to preview</StyledImagePreview>
          <StyledText $padding="0 0 0 0">May take a while to load preview</StyledText>
        </DownloadLinkContainer>
      ))}
    </Container>
  );
};
