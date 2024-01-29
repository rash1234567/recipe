import React from 'react';

import type { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from '../store';

function PersistProvider({ children }: { children: ReactNode }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}

export default PersistProvider;

//add a loader for the loading
