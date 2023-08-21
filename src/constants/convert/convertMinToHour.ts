export const convertMinsToHrs = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  if (hours >= 0 && minutes >= 0) {
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${formattedHours}h ${formattedMinutes}m`;
  }

  return 'Uninformed';
};
