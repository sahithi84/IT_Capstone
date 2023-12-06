import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native'; // You should import the appropriate ref type

// @ts-ignore
export const navigationRef: React.RefObject<NavigationContainerRef> =
  React.createRef();

export function navigate(
  name: string,
  params?: Record<string, any> | undefined,
) {
  try {
    return navigationRef.current?.navigate(name, params);
  } catch (error) {
    return error;
  }
}
