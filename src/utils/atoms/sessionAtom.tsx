import { persistentAtom } from '../helpers/atoms/persistentAtom';

export const sessionAtom = persistentAtom<{ isLoggedIn: boolean }>('session', {
  isLoggedIn: false,
});
