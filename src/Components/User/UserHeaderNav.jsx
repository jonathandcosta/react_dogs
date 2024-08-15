import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav>
      <NavLink to="/conta">Minhas Fotos</NavLink>
      <NavLink to="/conta/estatisticas">Estatíticas</NavLink>
      <NavLink to="/conta/postar">Adicionar Foto</NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
