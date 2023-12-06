import React, {ReactNode} from 'react';
import {OtpTripContext, OtpTripContextValue} from './context';
import {createTripFormStore} from '../../mobx/withOtpTripStates';

interface OtpTripContextProviderProps {
  children: ReactNode;
}

export const OtpTripContextProvider: React.FC<OtpTripContextProviderProps> = ({
  children,
}) => {
  const values = createTripFormStore;
  const value: OtpTripContextValue = {
    ...values,
  };

  return (
    <OtpTripContext.Provider value={value}>{children}</OtpTripContext.Provider>
  );
};
