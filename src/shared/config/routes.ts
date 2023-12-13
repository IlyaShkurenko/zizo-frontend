import { ComponentType, PropsWithChildren } from 'react';

export enum RouteName {
  MAIN_PAGE = '/',
}

export interface RouteDescription {
  path: RouteName;
  component: ComponentType;
  layout?: ComponentType<PropsWithChildren>;
}
