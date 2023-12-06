export const getPrefillablePaymentType = ({ paymentMode }: any) => {
  switch (paymentMode) {
    case 1:
      return "Paid by Cash";
    case 0:
    case 2:
      return "Paid by UPI/Other";
    case 3:
      return "Paid by Corporate";
    default:
      return "Paid by Cash";
  }
};
