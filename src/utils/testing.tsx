import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { INITIAL_STATE, rootReducer } from 'store/reducer';

const createMockStore = ({ reducer = rootReducer, state = INITIAL_STATE } = {}) =>
  createStore(reducer, { ...INITIAL_STATE, ...state });

const renderWithProviders = (Component: React.ReactNode): RenderResult =>
  render(<Provider store={createMockStore()}>{Component}</Provider>);

export default renderWithProviders;
