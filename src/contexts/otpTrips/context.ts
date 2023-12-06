import {createContext} from 'react';

export interface OtpTripContextValue {
  formData: any;
  setFormField: any;
  submitForm: any;
  clearFieldError: any;
  validateField: any;
  clearFields: any;
  errors: any;
  isFormValid: any;
  clearField: any;
}

export const OtpTripContext = createContext<OtpTripContextValue | null>(null);
