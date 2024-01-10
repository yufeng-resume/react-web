import React, { useEffect } from 'react';
import { auth } from 'src/firebase';
import { useSession } from 'src/utils/hooks/useSession';

interface Props {
  children: React.ReactNode;
}

export const SessionProvider = ({ children }: Props) => {
  const { login, logout } = useSession();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        login();
      } else {
        logout();
      }
    });

    return () => {
      unsubscribe();
    };
  });

  return <>{children}</>;
};
