export const handleTryCatch = async (asyncFunction: () => Promise<void>) => {
  try {
    await asyncFunction();
  } catch (error) {
    if (typeof error === 'string') {
      console.log('FetchProblem: ' + error.toUpperCase());
    } else if (error instanceof Error) {
      console.log('FetchProblem: ' + error.message);
    }
  }
};
