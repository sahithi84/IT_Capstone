export const getTripStatus = ({
  isProviderAccepted = 0,
  isProviderStatus = 0,
}) => {
  switch (isProviderAccepted) {
    case 1:
      if (isProviderStatus === 1 || isProviderStatus === 0) {
        return 'Accepted';
      }
      return 'Waiting';
    case 2:
      return 'Coming';
    case 0:
    case 3:
      return 'Waiting';
    case 4:
      return 'Arrived';
    case 6:
      return 'Started';
    case 9:
      return 'Completed';
    default:
      return 'Waiting';
  }
};
