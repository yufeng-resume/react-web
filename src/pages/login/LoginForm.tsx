import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

import { auth } from 'src/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px;
  margin-top: 100px;
  padding: 0px;
  padding-left: 0px;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

interface InputProps {
  $padding?: string;
  $margin?: string;
}

const Input = styled.input<InputProps>`
  display: block;
  padding: ${({ $padding }) => ($padding ? $padding : '6px')};
  margin: ${({ $margin }) => ($margin ? $margin : '6px')};

  &[aria-invalid='true'] {
    border-color: red;
  }

  &[aria-invalid='false'] {
    border-color: green;
  }

  &:focus {
    outline: none; /* Removes the default browser outline */

    &[aria-invalid='true'] {
      border-color: red;
    }

    &[aria-invalid='false'] {
      border-color: green;
    }
  }
`;

const Label = styled.label`
  display: block;
  padding-left: 6px;
`;

const ErrorMessage = styled.span`
  color: red;
`;

type Inputs = {
  email: string;
  password: string;
  submit?: boolean;
};

const schema = yup
  .object({
    email: yup.string().email('Invalid email. ').required('Email is required. '),
    password: yup.string().required('Password is required. '),
  })
  .required();

export const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      const { from } = location.state || { from: { pathname: '/' } };
      navigate(from);
    } catch (error: any) {
      setError('submit', { type: 'manual', message: 'Login failed' });
    }
  };
  return (
    <Container>
      <ErrorMessage>
        {errors.submit?.message || '\u00A0'} {errors.email?.message || '\u00A0'} {errors.password?.message || '\u00A0'}
      </ErrorMessage>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Email</Label>
        <Input {...register('email')} aria-invalid={errors.email ? 'true' : 'false'} />
        <Label>Password</Label>
        <Input {...register('password')} type="password" aria-invalid={errors.password ? 'true' : 'false'} />
        <Input $margin="10px 0 6px 6px" type="submit" />
      </form>
    </Container>
  );
};
