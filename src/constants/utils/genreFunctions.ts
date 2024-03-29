import {genreMap} from './genres';
import {IGenres} from '../Interfaces/IMovieByIDInterface';

// export const convertTypeWithGenre = (movieGenres: number[]): string => {
//   if (movieGenres.length > 1) {
//     const firstGenre = genreMap.get(movieGenres[0])
//       ? genreMap.get(movieGenres[0])
//       : `Unknown Genre: ${movieGenres[0]}`;
//     const secondGenre = genreMap.get(movieGenres[1])
//       ? genreMap.get(movieGenres[1])
//       : `Unknown Genre: ${movieGenres[1]}`;

//     return `${firstGenre}, ${secondGenre}`;
//   } else if (movieGenres.length === 1) {
//     const firstGenre = genreMap.get(movieGenres[0])
//       ? genreMap.get(movieGenres[0])
//       : `Unknown Genre: ${movieGenres[0]}`;
//     return `${firstGenre}`;
//   }
//   return 'No genre found.';
// };
export const convertTypeWithGenre = (movieGenres: number[]): string => {
  if (movieGenres.length === 0) {
    return 'No genre found.';
  }

  const genreNames = movieGenres.map(genreId =>
    genreMap.get(genreId) ? genreMap.get(genreId) : `Unknown Genre: ${genreId}`,
  );

  return genreNames.join(', ');
};

export const moviePopupGenre = (movieGenreIDs: IGenres[]): string => {
  if (movieGenreIDs?.length) {
    const genreNames = movieGenreIDs.map(
      genre => genreMap.get(genre.id) || `Unknown Genre: ${genre.id}`,
    );

    return genreNames.join(', ');
  }

  return 'No genre id found.';
};

// export const moviePopupGenre = (movieGenreIDs: IGenres[]): string => {
//   if (movieGenreIDs !== undefined) {
//     if (movieGenreIDs.length > 1) {
//       const firstGenre = genreMap.get(movieGenreIDs[0].id)
//         ? genreMap.get(movieGenreIDs[0].id)
//         : `Unknown Genre: ${movieGenreIDs[0]}`;
//       const secondGenre = genreMap.get(movieGenreIDs[1].id)
//         ? genreMap.get(movieGenreIDs[1].id)
//         : `Unknown Genre: ${movieGenreIDs[0]}`;

//       return `${firstGenre}, ${secondGenre}`;
//     } else if (movieGenreIDs.length === 1) {
//       const firstGenre = genreMap.get(movieGenreIDs[0].id)
//         ? genreMap.get(movieGenreIDs[0].id)
//         : `Unknown Genre: ${movieGenreIDs[0]}`;
//       return `${firstGenre}`;
//     }
//   }
//   return 'No genre id found.';
// };
export const convertTypeWithGenreByID = (movieGenreIDs: IGenres[]): string => {
  if (movieGenreIDs?.length) {
    const genreNames = movieGenreIDs.map(genre => genre.name);
    return genreNames.join(', ');
  }

  return 'Unknown Genres in ID';
};
// export const convertTypeWithGenreByID = (movieGenreIDs: IGenres[]): string => {
//   if (movieGenreIDs !== undefined) {
//     let genreString = '';
//     for (let i = 0; i < movieGenreIDs.length; i++) {
//       genreString += movieGenreIDs[i].name + ', ';
//     }
//     return `${genreString}`;
//   }
//   return 'Unknown Genres in ID';
// };
