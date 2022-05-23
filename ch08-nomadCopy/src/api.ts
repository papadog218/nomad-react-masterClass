const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  name: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export enum OrderBy {
  NOW_PLAYING = `now_playing`,
  UPCOMING = `upcoming`,
  TOP_RATED = `top_rated`,
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/${OrderBy.NOW_PLAYING}?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
export function getTvShows() {
  return fetch(`${BASE_PATH}/tv/airing_today?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
// export function getUpcomingMovies() {
//   return fetch(`${BASE_PATH}/movie/${OrderBy.UPCOMING}?api_key=${API_KEY}`).then(
//     (response) => response.json()
//   );
// }
// export function getTopRatedMovies() {
//   return fetch(`${BASE_PATH}/movie/${OrderBy.TOP_RATED}?api_key=${API_KEY}`).then(
//     (response) => response.json()
//   );
// }



