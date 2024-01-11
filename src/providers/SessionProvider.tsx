import React, { useEffect } from 'react';
import { auth } from 'src/firebase';
import { useSession } from 'src/utils/hooks/useSession';

interface Props {
  children: React.ReactNode;
}

export const SessionProvider = ({ children }: Props) => {
  // SessionProvider adds a listener to the auth state to check
  // if the user is logged in or not and automatically updates sessionAtom
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
