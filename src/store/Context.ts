import { createContext } from 'react';
import { IContext } from './types';

export const Context = createContext<IContext>({
  openModal: false,
  setOpenModal: () => null,
  users: [],
  setUsers: () => null,
});

export default Context;
