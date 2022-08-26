import { useState } from 'react';
import { Context } from './Context';
import { IUser } from './types';

interface IProps {
  children: React.ReactNode;
}

const Provider: React.FC<IProps> = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <Context.Provider value={{ openModal, setOpenModal, users, setUsers }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
