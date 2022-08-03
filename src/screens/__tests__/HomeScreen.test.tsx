import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import { HomeScreen } from '../HomeScreen';

it('renders tappable items', () => {
  const push = jest.fn();
  const navigate = jest.fn();
  // @ts-ignore
  // Ignoring next line because we don't need to pass all React Navigation related props down to the
  // screen for this test to work.
  const out = render(<HomeScreen navigation={{ push, navigate }} />);

  fireEvent.press(out.getByText('common.hello'));
  expect(push).toBeCalledWith('List');
});
