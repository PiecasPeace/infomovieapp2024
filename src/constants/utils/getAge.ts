export const getAge = (birthday: string): string => {
  if (!birthday) return 'No age';

  const today = new Date();
  const birthDate = new Date(birthday);
  const age = today.getFullYear() - birthDate.getFullYear();
  const isBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  return isBirthdayPassed ? `${age} years old` : `${age - 1} years old`;
};
