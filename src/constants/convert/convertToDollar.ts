export const convertToDollar = (value: number): string => {
  if (!isNaN(value)) {
    const formattedValue = `$${value.toFixed(2)}`;
    return formattedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return 'Uninformed';
};
