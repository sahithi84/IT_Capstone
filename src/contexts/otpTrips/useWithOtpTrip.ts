import {useContext} from 'react';
import {OtpTripContext} from './context';

export function useWithOtpTrip() {
  const values = useContext(OtpTripContext);

  return {...values};
}
