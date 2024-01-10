import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: background 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.dark};

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

interface HeaderProps {
  open?: boolean;
}

const Header = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme, open }) => (open ? theme.colors.light : theme.colors.light)};
  }
`;

interface ContentProps {
  open: boolean;
}

const Content = styled.div<ContentProps>`
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

interface Props {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

export const ExpendablePanel = ({ header, children }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Container tabIndex={0}>
      <Header onClick={() => setOpen(!open)} open={open}>
        {header}
      </Header>
      <Content open={open}>{children}</Content>
    </Container>
  );
};
