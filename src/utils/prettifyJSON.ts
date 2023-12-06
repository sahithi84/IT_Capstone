export const prettifyJSON = (message: any) => {
  return JSON.stringify(message, null, 2);
};
