export const arePropsEqual = <T>(prevProps: T, nextProps: T) =>
  JSON.stringify(prevProps) === JSON.stringify(nextProps);
