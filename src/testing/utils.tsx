import { ReactNode } from 'react';

import deepmerge from 'deepmerge';
import { NativeBaseProvider } from 'native-base';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { initialState } from '#app/core/store/store';

const mockStore = configureStore();

export const TestWrapper = ({
  children,
  store = {},
}: {
  children: ReactNode;
  store: Object;
}) => {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  const mockedStore = mockStore(deepmerge(initialState, store));

  return (
    <ReduxProvider store={mockedStore}>
      <NativeBaseProvider initialWindowMetrics={inset}>
        {children}
      </NativeBaseProvider>
    </ReduxProvider>
  );
};
