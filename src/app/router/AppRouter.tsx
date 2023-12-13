import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouteName, RouteDescription } from '@/shared/config/routes';
import { NotFoundPage } from '@/pages/NotFoundPage';

import { sharedUiLayouts } from '@/shared/ui';
import { WordsCountPage } from '@/pages/WordsCountPage';

const { MAIN_PAGE } = RouteName;

const routes: RouteDescription[] = [
  {
    path: MAIN_PAGE,
    component: WordsCountPage,
  },
];

const routesContent = routes.map(({ path, component: Component }) => (
  <Route key={path} path={path} element={<Component />} />
));

export const AppRouter = () => {
  return (
    <sharedUiLayouts.SuspenseLayout>
      <Routes>
        {routesContent}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </sharedUiLayouts.SuspenseLayout>
  );
};
