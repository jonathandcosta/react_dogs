import React from 'react';
import { NavLink } from 'react-router-dom';

const UserHeaderNav = () => {
  return (
    <nav>
      <NavLink to="/conta">Minhas Fotos</NavLink>
      <NavLink to="/conta/estatisticas">Estatíticas</NavLink>
      <NavLink to="/conta/postar">Adicionar Foto</NavLink>
      <button>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
