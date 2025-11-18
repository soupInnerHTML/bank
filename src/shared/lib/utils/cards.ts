export const sliceCardNumber = (cardNumber: string) => {
  return '•• ' + cardNumber.toString().slice(-4);
};
