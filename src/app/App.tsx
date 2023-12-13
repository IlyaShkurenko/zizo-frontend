import React from 'react';

import { AppRouter } from '@/app/router/AppRouter';

import './style/global.scss';

import { withProviders } from './providers';

const App = () => {
  return <AppRouter />;
};

export default withProviders(App);
