import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';

const LoginCreate = () => {
  // validar as informações do usuário no input.
  //obs: para forçar o preenchimento do input na page usa-se a const dessa forma-> const username = useForm('nome') com o parametro que será exigido preenchido na const.
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Email" type="email" name="email" />
        <Input label="Senha" type="passaword" name="password" />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
