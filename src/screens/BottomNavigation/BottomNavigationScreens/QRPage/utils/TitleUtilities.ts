export const extractMovieTitles = (
  rawTitles: string[],
  regex: RegExp,
): string[] => {
  const regexOutput: RegExpMatchArray | null = rawTitles[0].match(regex);
  const extractedTitles: string[] = [];
  if (regexOutput !== null) {
    for (let i = 0; i < regexOutput.length; i++) {
      //Regex gives back an array so we have to give it the [0] index
      extractedTitles[i] = regexOutput[0].toString();
      console.log(extractedTitles[i]);
    }
  }
  return extractedTitles;
};
//TODO: Test this commented out function..
// export const extractMovieTitles = (
//   rawTitles: string[],
//   regex: RegExp,
// ): string[] => {
//   const regexOutput = rawTitles[0].match(regex);
//   const extractedTitles: string[] = [];

//   if (regexOutput) {
//     for (const match of regexOutput) {
//       extractedTitles.push(match);
//       console.log(match);
//     }
//   }

//   return extractedTitles;
// };