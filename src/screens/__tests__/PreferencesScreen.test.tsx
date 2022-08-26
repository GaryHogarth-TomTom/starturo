import React from 'react';

import { render } from '@testing-library/react-native';

import { TestWrapper } from '#app/testing';

import { PreferencesScreen } from '../PreferencesScreen';

it('Renders the Home Screen', () => {
  const push = jest.fn();
  const navigate = jest.fn();
  // @ts-ignore
  // Ignoring next line because we don't need to pass all React Navigation related props down to the
  // screen for this test to work.
  const out = render(<PreferencesScreen navigation={{ push, navigate }} />, {
    wrapper: TestWrapper,
  });

  expect(out.getByText('Home'));
});
