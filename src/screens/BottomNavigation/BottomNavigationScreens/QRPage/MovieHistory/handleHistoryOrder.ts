export const handleHistoryOrder = (regex: string, history: string[]) => {
  history.unshift(regex); // Add the new regex at the beginning of the history

  const maxHistoryLength = 3;

  if (history.length > maxHistoryLength) {
    history.pop(); // Remove the oldest entry if history exceeds max length
  }
};
