import * as RadixAspectRatio from '@radix-ui/react-aspect-ratio';
import { styled } from 'styled-components';
import React from 'react';

interface ContainerProps {
  $width?: string;
  $height?: string;
  children?: React.ReactNode;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  width: ${({ $width }) => ($width ? `${$width}` : '100%')};
  height: ${({ $height }) => ($height ? `${$height}` : '100%')};
`;

const Root = styled(RadixAspectRatio.Root)`
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

interface Props extends ContainerProps {
  src: string;
  alt: string;
  ratio?: number;
}

export const Image = ({ src, alt, ratio = 16 / 9, $width, $height }: Props) => {
  return (
    <Container $width={$width} $height={$height}>
      <Root ratio={ratio}>
        <img src={src} alt={alt} />
      </Root>
    </Container>
  );
};
