import { useIntl } from 'react-intl';
import { styled } from 'styled-components';

import { messages } from 'src/assets/messages';
import { Icon } from 'src/elements/Icon';

interface Props {
  $opacity?: number;
}

const Overlay = styled.div.attrs((props) => ({
  role: 'alert',
  'aria-label': 'loading',
  ...props,
}))<Props>`
  position: absolute;
  inset: 0;
  opacity: ${({ $opacity }) => String($opacity)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary10};
  transition: opacity 0.2s;
  pointer-events: none;
`;

export const LoadingOverlay = ({ $opacity = 1 }: Props) => {
  const { formatMessage } = useIntl();

  return (
    <Overlay $opacity={$opacity}>
      <Icon name="progress_activity" label={formatMessage(messages.loading)} $spin $size="heading" $color="primary" />
    </Overlay>
  );
};
