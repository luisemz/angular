export interface Movie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  title: string;
  overview: string;
  genres: [{ name: string }];
  popularity: number;
  production_companies: [{ name: string }];
  production_countries: [{ name: string }];
  release_date: string;
  revenue: number;
}
