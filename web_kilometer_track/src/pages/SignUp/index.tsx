import React, { useRef, useCallback } from 'react';
// import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// import { Form } from '@unform/web';
// import { FormHandles } from '@unform/core';

// import * as Yup from 'yup';

// import { useAuth } from '../../hooks/auth';
// import { useToast } from '../../hooks/toast';

// import logoImg from '../../assets/logo.png';

// import Button from '../../components/Button';
// import Input from '../../components/Input';

// import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, AnimationContainer } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  // const formRef = useRef<FormHandles>(null);
  // const { signIn } = useAuth();
  // const { addToast } = useToast();
  // const history = useHistory();

  // const handleSubmit = useCallback(
  //     async (data: SignInFormData) => {
  //         try {
  //             formRef.current?.setErrors({});

  //             const schema = Yup.object().shape({
  //                 email: Yup.string().required('Email is required').email('Email incorrect'),
  //                 password: Yup.string().required('Password is required'),
  //             });

  //             await schema.validate(data, {
  //                 abortEarly: false,
  //             });

  //             await signIn({ email: data.email, password: data.password });

  //             history.push('/dashboard');
  //         } catch (err) {
  //             if (err instanceof Yup.ValidationError) {
  //                 const errors = getValidationErrors(err);
  //                 formRef.current?.setErrors(errors);

  //                 addToast({
  //                     type: 'info',
  //                     title: 'Login Error',
  //                     description: 'Something wrong when tried to log in',
  //                 });

  //                 return;
  //             }

  //             addToast({
  //                 type: 'error',
  //                 title: 'Login Error',
  //                 description: 'Login/password incorrect',
  //             });
  //         }
  //     },
  //     [signIn, addToast, history],
  // );

  return (
    <h1>
      SignUp
    </h1>
  );
};

export default SignIn;