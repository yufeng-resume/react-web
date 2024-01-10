import { useAtom } from 'jotai';

import { sessionAtom } from 'src/utils/atoms/sessionAtom';

export const useSession = () => {
  const [{ isLoggedIn }, setSession] = useAtom(sessionAtom);

  return {
    isLoggedIn,
    logout: () => {
      setSession({ isLoggedIn: false });
    },
    login: () => {
      setSession({ isLoggedIn: true });
    },
  };
};
