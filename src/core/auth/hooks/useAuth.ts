import { useContext } from 'react';

import { AuthContext } from '../AuthProvider';

export type User = {
  email: string;
};
export type Context = {
  session: any;
  user: User | null;
};

export const useAuth = (): Context => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw Error('useAuth must be used within AuthProvider');
  return context;
};
