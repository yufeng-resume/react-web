import { UseQueryResult } from '@tanstack/react-query';
import { Fragment, ReactNode } from 'react';
import { styled } from 'styled-components';

import { fadeIn, flash } from 'src/assets/keyframes';
import { LoadingOverlay } from 'src/components/ui/Loading';
import { FlexGroup } from 'src/elements/FlexGroup';

interface Props<T> {
  queryResult: UseQueryResult<T>;
  children: (data: T) => ReactNode | ReactNode[];
  contentDimensions?: { x: number; y: number };
  direction?: 'horizonal' | 'vertical';
  cardCount?: number;
  gap?: number;
}

const ContentPlaceholder = styled.div<{ $width: number; $height: number }>`
  width: ${({ $width }) => ($width === 1 ? 'calc(100%)' : `${$width}px`)};
  height: ${({ $height }) => $height}px;
  background-color: ${({ theme }) => theme.colors.secondaryHover};
  animation: ${flash} 1s linear infinite, ${fadeIn} 0.4s;
  will-change: opacity;
`;

export const Await = <T extends unknown>({
  queryResult,
  children,
  contentDimensions,
  direction = 'vertical',
  cardCount = 4,
  gap = 8,
}: Props<T>) => {
  const { data, isLoading, isError, isFetching } = queryResult;

  if (isError || isLoading || !data) {
    return (
      <FlexGroup
        style={{ position: 'relative', flex: contentDimensions ? 0 : 1 }}
        $vertical={direction === 'vertical'}
        $gap={gap}
      >
        {contentDimensions ? (
          <Fragment>
            {Array.from({ length: cardCount }, (_, key) => (
              <ContentPlaceholder key={key} $width={contentDimensions.x} $height={contentDimensions.y} />
            ))}
          </Fragment>
        ) : (
          <LoadingOverlay />
        )}
      </FlexGroup>
    );
  }

  return (
    <Fragment>
      {children(data)}

      {cardCount > 0 && <LoadingOverlay $opacity={isFetching ? 0.5 : 0} />}
    </Fragment>
  );
};
