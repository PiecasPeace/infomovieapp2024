export const convertToYear = (date: string | number | Date): string => {
  const year = new Date(date).getFullYear();
  return year ? year.toString() : '';
};

export const convertToDate = (date: string | number | Date): string => {
  const newDate = new Date(date);
  if (!isNaN(newDate.getTime())) {
    const day = newDate.getDate() + 1;
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return 'Uninformed';
};

export const getTodayDate = (): string => {
  const today = new Date();
  const isoDate = today.toISOString().slice(0, 10);
  return isoDate;
};
