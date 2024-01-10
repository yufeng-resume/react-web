import 'src/assets/styles.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as JotaiProvider } from 'jotai';
import { router } from './router';
import { ThemeProvider } from 'src/providers/ThemeProvider';
import { FirestoreProvider } from 'reactfire';
import { firestore, firebaseConfig } from './firebase';
import { FirebaseAppProvider } from 'reactfire';
import { SessionProvider } from './providers/SessionProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <FirestoreProvider sdk={firestore}>
      <JotaiProvider>
        <SessionProvider>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </SessionProvider>
      </JotaiProvider>
    </FirestoreProvider>
  </FirebaseAppProvider>
);
