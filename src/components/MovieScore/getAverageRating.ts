export const getAverageRating = (score: number): number[] => {
  const average = score > 5 ? Math.round(score) : score;

  if (average >= 5) {
    const length =
      average !== 10 ? parseInt(average.toString()[0]) - 5 : average - 5;

    return Array.from({length}, (_, i) => i);
  }

  return [];
};
