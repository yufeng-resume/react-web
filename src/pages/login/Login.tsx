import styled from 'styled-components';
import React from 'react';

import { LoginForm } from './LoginForm';

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

export const Login = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};
