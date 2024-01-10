import { atom } from 'jotai';

export const persistentAtom = <T extends object>(key: string, initialValue: T) => {
  const getInitialValue = () => {
    const item = localStorage.getItem(key);

    if (item === null) {
      return initialValue;
    }

    try {
      const parsed: T = JSON.parse(item ?? '{}');

      return typeof parsed === 'object' ? parsed : initialValue;
    } catch {
      return initialValue;
    }
  };

  const baseAtom = atom(getInitialValue());

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (_, set, update: T) => {
      set(baseAtom, update);
      localStorage.setItem(key, JSON.stringify(update));
    }
  );
  return derivedAtom;
};
