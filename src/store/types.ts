import { Dispatch, SetStateAction } from 'react';

export interface IUser {
  id: string;
  nome: string;
}

export interface IContext {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}
