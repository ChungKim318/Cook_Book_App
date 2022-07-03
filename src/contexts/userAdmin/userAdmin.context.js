import createContext from '../createContext';
import {getUserAdmin} from './userAdmin.action';
import userAdminReducer from './userAdmin.reducer';

export const {Context, Provider} = createContext(
  userAdminReducer,
  {getUserAdmin},
  [],
);
